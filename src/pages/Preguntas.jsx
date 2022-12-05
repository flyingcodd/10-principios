import React from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";
import HomeCarousel from "../components/HomeCarousel";
import { Container } from "@mui/system";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(1,30),
  borderBottom: 0,
  /*border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },*/
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function Preguntas() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    
    <div>
      <Divider></Divider>
      <HomeCarousel/>
      <Container>
      <Typography variant="h4" color="primary" styled="center" sx={{mt: 2, mb: 2}}>
              PREGUNTAS FRECUENTES
            </Typography>
      </Container>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      
        
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          
          <Typography>¿Qué hacer si el pago con mi tarjeta de débito/crédito es denegado?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Debe usted ponerse en contacto con su Banco 
          (el emisor de su tarjeta de débito o crédito) 
          y pedirle le indique el motivo de la denegación del pago.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>¿Registrarse como usuario a unamba-Pagos tiene algún costo?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, el proceso de registro como usuario de Págalo.pe es gratuito y no significará 
          para usted costo alguno (ni en el momento de la afiliación, ni en un momento 
          posterior).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>¿Hay forma de recuperar mi clave de acceso en caso de olvido?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sí, para tal efecto debes hacer clic sobre el link "Recuperar contraseña" y la 
          aplicación informática le solicitará registre la dirección de correo electrónico 
          con la que se afilió a Págalo.pe a donde le enviará un código de verificación 
          que deberá registrar junto a su nueva clave de acceso para confirmar la operación.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>¿Puedo pagar varios servicios a la vez como parte de una misma transacción ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, los pagos considerados servicios como pago de aportes al SIS, Multas 
          Electorales, Multas Indecopi, entre otros, solo se pueden pagar uno por uno, 
          por lo que no se pueden agregar a un carrito de compras ni combinar con 
          otras tasas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>¿Cómo obtengo las constancias de pago de las tasas compradas a través de Unamba-Pagos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Confirmada la transacción, la constancia o constancias de pago en formato PDF 
          (dependiendo si pago una o varias tasas como parte de la compra) serán enviadas 
          automáticamente a la dirección de correo electrónico con la que se afilió 
          a Unamba-Pagos y que utiliza para logearse al servicio. Adicionalmente, si el 
          pago se efectuó en línea le llegará también en el mismo correo el voucher del 
          cargo a la tarjeta de crédito o débito que empleo para efectivizar la transacción. 
          Adicionalmente en la pantalla principal del aplicativo usted cuenta con una 
          consulta de los últimos pagos efectuados a través de esta plataforma online, 
          pudiendo descargar las constancias de pago de las tasas que forman parte de 
          estas transacciones.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Preguntas;