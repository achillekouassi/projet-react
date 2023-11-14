import React from 'react'
import './widget.scss'
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function Widget({type}) {
  let data;

  const amount = 100
  const diff = 20

  switch(type){
      case "user":
        data={
          title:"USERS",
          isMoney:false,
          link:"See all users",
          icon:<PersonOutlinedIcon className='icon' style={{
            color:"crimson",
            backgroundColor:"rgba(255, 0, 0, 0.2)"
          }}/>
        };
        break;
        case "order":
          data={
            title:"ORDERS",
            isMoney:false,
            link:"See all users",
            icon:<ShoppingCartOutlinedIcon className='icon' style={{
              color:"goldenrod",
              backgroundColor:"rgba(218, 165, 32, 0.2)"
            }}/>
          };
          break;
          case "earning":
            data={
              title:"EARNING",
              isMoney:true,
              link:"View net earnings",
              icon:<MonetizationOnOutlinedIcon className='icon' style={{
                color:"green",
                backgroundColor:"rgba(0, 128, 0, 0.2)"
              }}/>
            };
            break;
            case "balance":
              data={
                title:"BALANCES",
                isMoney:true,
                link:"See details",
                icon:<AccountBalanceWalletOutlinedIcon className='icon' style={{
                  color:"purple",
                  backgroundColor:"rgba(128, 0, 128, 0.2)"
                }}/>
              };
              break;
        default:
          break;
  }
  return (
    <div className='widget'>
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.isMoney && "$"} {amount}</span>
          <span className="link">{data.link}</span>
           </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardControlKeyIcon />
            {diff}
          </div>
          {data.icon}
          </div>
    </div>
  )
}

export default Widget