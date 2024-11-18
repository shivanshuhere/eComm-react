import nodemailer from "nodemailer";

const SendEmail = async (email, generatedOtp) => {

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'quickcartspprt@gmail.com',
        pass: 'sptokcjdeaucpzyc'
      }
    });

    const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify your login</title>
    <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
  </head>
  
  <body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
    <table role="presentation"
      style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
      <tbody>
        <tr>
          <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
            <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
              <tbody>
                <tr>
                  <td style="padding: 40px 0px 0px;">
                    <div style="padding: 20px; background-color: rgb(255, 255, 255);">
                      <div style="color: rgb(0, 0, 0); text-align: left;">
                        <h1 style="margin: 1rem 0">Verification code</h1>
                        <p style="padding-bottom: 16px">Please use the verification code below to verify your account.</p>
                        <p style="padding-bottom: 16px"><strong style="font-size: 130%">${generatedOtp}</strong></p>
                        <p style="padding-bottom: 16px">If you didn’t request this, you can ignore this email.</p>
                        <p style="padding-bottom: 16px">Thanks,<br>ChatBox Team</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  
  </html>`

    const sender = {
      from: 'QuickCart', // sender address
      to: email, // list of receivers
      subject: "Otp Verification ✔", // Subject line
      html: html, // html body
    }

    // async..await is not allowed in global scope, must use a wrapper
    // send mail with defined transport object
    const info = await transporter.sendMail(sender);

    return {
      message: "Email sent successfully",
      data: info,
      success: true
    }

  } catch (error) {
    return error
  }
}




export const WelcomeEmail = async (email, name) => {

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'quickcartspprt@gmail.com',
        pass: 'sptokcjdeaucpzyc'
      }
    });

    const text = `Hi ${name},

Welcome to QuickCart! We’re thrilled to have you join our community of savvy shoppers.

Here’s what you can look forward to:

Exclusive Deals & Discounts: Enjoy special offers curated just for you.

Wide Range of Products: From Fashion, Electronics, Home Essentials, etc., we have it all!

Fast & Reliable Delivery: Shop with confidence and receive your orders on time.


To kick things off, here’s a little something for you:
  [RANDI] – Use this code at checkout to get 10% off.

Start exploring and make the most of your shopping experience with us!

👉 Shop Now

Need assistance? Our customer support team is here to help you 24/7. Reach out anytime at quickcartspprt@gmail.com.

Once again, welcome aboard! We can’t wait to serve you.

Warm regards,
QuickCart Team
QuickCart
`

    const sender = {
      from: 'QuickCart', // sender address
      to: email, // list of receivers
      subject: "Welcome to QuickCart – Let’s Get Started! ✔", 
      text: text, // html body
    }

    // async..await is not allowed in global scope, must use a wrapper
    // send mail with defined transport object
    const info = await transporter.sendMail(sender);

    return {
      message: "Email sent successfully",
      data: info,
      success: true
    }

  } catch (error) {
    return error
  }
}

export default SendEmail