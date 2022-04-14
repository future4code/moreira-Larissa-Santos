import { Request, Response } from "express";
import connection from "../data/connection";
import { getAddressInfos } from "../services/getAddressInfo";
import transporter from "../services/mailTransporter";
import { FullAddress } from "../types/types";

export const getAdddress = async (req: Request, res: Response) => {
  try {
    const { zipcode, number, address2, email } = req.body;
    const address = await getAddressInfos(zipcode);

    if (!zipcode || !number || !address2) {
      throw new Error("Please check inputs. Missing values.");
    }

    if (!address) {
      throw new Error("Error on get address");
    }

    const user: FullAddress = {
      id: Math.random() * Date.now(),
      email: email,
      zipCode: zipcode,
      street: address.street,
      number: number,
      address2: address2,
      district: address.district,
      city: address.city,
      state: address.state,
    };

    await connection("AddressUser").insert(user);

    const emailInfo = await transporter.sendMail({
      from: `${process.env.NODEMAILER_USER}`,
      to: `${email}`,
      subject: "Sejam Bem-Vindos",
      text: "Parabéns, vocês são os novos contratados da Mondelez",
      html: `<p>Segue demais informações sobre as vagas em breve. Eis seu novo endereço: <br>
      ${address.street}, bairro ${address.district}, ${address.city}/${address.state} </p>`
    });

    res.status(200).send(`User successfuly registered.`);
  } catch (error: any) {
    switch (error.message) {
      case "Please check inputs. Missing values.":
        res.status(422);
        break;
      case "Error on get address":
        res.status(404);
        break;
      default:
        res.status(500);
    }
    res.send({ message: error.sqlMessage || error.message });
  }
};