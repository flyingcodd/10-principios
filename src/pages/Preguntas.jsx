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
          
          <Typography>??Qu?? hacer si el pago con mi tarjeta de d??bito/cr??dito es denegado?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Debe usted ponerse en contacto con su Banco 
          (el emisor de su tarjeta de d??bito o cr??dito) 
          y pedirle le indique el motivo de la denegaci??n del pago.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>??Registrarse como usuario a unamba-Pagos tiene alg??n costo?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, el proceso de registro como usuario de P??galo.pe es gratuito y no significar?? 
          para usted costo alguno (ni en el momento de la afiliaci??n, ni en un momento 
          posterior).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>??Hay forma de recuperar mi clave de acceso en caso de olvido?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          S??, para tal efecto debes hacer clic sobre el link "Recuperar contrase??a" y la 
          aplicaci??n inform??tica le solicitar?? registre la direcci??n de correo electr??nico 
          con la que se afili?? a P??galo.pe a donde le enviar?? un c??digo de verificaci??n 
          que deber?? registrar junto a su nueva clave de acceso para confirmar la operaci??n.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>??Puedo pagar varios servicios a la vez como parte de una misma transacci??n ?</Typography>
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
          <Typography>??C??mo obtengo las constancias de pago de las tasas compradas a trav??s de Unamba-Pagos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Confirmada la transacci??n, la constancia o constancias de pago en formato PDF 
          (dependiendo si pago una o varias tasas como parte de la compra) ser??n enviadas 
          autom??ticamente a la direcci??n de correo electr??nico con la que se afili?? 
          a Unamba-Pagos y que utiliza para logearse al servicio. Adicionalmente, si el 
          pago se efectu?? en l??nea le llegar?? tambi??n en el mismo correo el voucher del 
          cargo a la tarjeta de cr??dito o d??bito que empleo para efectivizar la transacci??n. 
          Adicionalmente en la pantalla principal del aplicativo usted cuenta con una 
          consulta de los ??ltimos pagos efectuados a trav??s de esta plataforma online, 
          pudiendo descargar las constancias de pago de las tasas que forman parte de 
          estas transacciones.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Preguntas;