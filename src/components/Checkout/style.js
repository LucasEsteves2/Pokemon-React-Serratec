import styled from "styled-components";


export const Container = styled.div`


  
 
	font-family: 'Ubuntu', sans-serif;
	background: blue;
	height: 100%;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #1c1c1c;
	display: flex;
	justify-content: center;
	
  
  
  
  .ticket-system {
	  
	max-width: 385px;
	.top {
	  display: flex;
	  align-items: center;
	  flex-direction: column;
	  .title {
		font-weight: normal;
		font-size: 1.6em;
		text-align: left;
		margin-left: 20px;
		margin-bottom: 50px;
		color: #fff;
		margin-top:50px
	  }
	  .printer {
		width: 90%;
		height: 20px;
		border: 5px solid #fff;
		border-radius: 10px;
		box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.2);
	  }
	}
  
	.receipts-wrapper {
	  overflow: hidden;
	  margin-top: -10px;
	  padding-bottom: 10px;
	}
  
	.receipts {
	  width: 100%;
	  display: flex;
	  align-items: center;
	  flex-direction: column;
	  transform: translateY(-510px);
  
	  animation-duration: 2.5s;
	  animation-delay: 500ms;
	  animation-name: print;
	  animation-fill-mode: forwards;
  
  
	  .receipt {
		padding: 25px 30px;
		text-align: left;
		min-height: 200px;
		width: 88%;
		background-color: #fff;
		border-radius: 10px 10px 20px 20px;
		box-shadow: 1px 3px 8px 3px rgba(0, 0, 0, 0.2);
  
		.airliner-logo {
		  max-width: 80px;
		}
  
		.route {
		  display: flex;
		  justify-content: space-between;
		  align-items: center;
		  margin: 30px 0;
  
		  .plane-icon {
			width: 30px;
			height: 30px;
			transform: rotate(90deg);
		  }
		  h2 {
			font-weight: 300;
			font-size: 2.2em;
			margin: 0;
		  }
		}
  
		.details {
		  display: flex;
		  justify-content: space-between;
		  flex-wrap: wrap;
  
		  .item {
			display: flex;
			flex-direction: column;
			min-width: 70px;
  
			span {
			  font-size: .8em;
			  color: rgba(28, 28, 28, .7);
			  font-weight: 500;
			}
			h3 {
			  margin-top: 10px;
			  margin-bottom: 25px;
			}
		  }
		}
  
		&.qr-code {
		  height: 110px;
		  min-height: unset;
		  position: relative;
		  border-radius: 20px 20px 10px 10px;
		  display: flex;
		  align-items: center;
  
		  //TODO: replace with svg
		  &::before {
			content: '';
			background: linear-gradient(to right, #fff 50%, #3f32e5 50%);
			background-size: 22px 4px, 100% 4px;
			height: 4px;
			width: 90%;
			display: block;
			left: 0;
			right: 0;
			top: -1px;
			position: absolute;
			margin: auto;
		  }
  
		  .qr {
			width: 70px;
			height: 70px;
		  }
		  
		  .description {
			margin-left: 20px;
  
			h2 {
			  margin: 0 0 5px 0;
			  font-weight: 500;
			}
			p {
			  margin: 0;
			  font-weight: 400;
			}
		  }
		}
	  }
	}
  }
  
  @keyframes print {
	0% {
	  transform: translateY(-510px)
	}
	35% {
	  transform: translateY(-395px);
	}
	70% {
	  transform: translateY(-140px);
	}
	100% {
	  transform: translateY(0);
	}
  }

  
.svg-icon {
	width: 5em;
	height: 5em;
  }
  
  .svg-icon path,
  .svg-icon polygon,
  .svg-icon rect {
	fill: #4691f6;
  }
  
  .svg-icon circle {
	stroke: #4691f6;
	stroke-width: 1;
  }
  
  `