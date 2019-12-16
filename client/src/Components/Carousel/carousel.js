import React from 'react';
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardText } from "mdbreact";

function CarouselA()  {    
        return(                
            <MDBContainer className="mdbcarcont">
            <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">     
                  <MDBRow>

                     <MDBCol size="6">
                      <MDBCard >
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                        <p className="text-center"><small style={{color:'black'}}>Roma</small></p>
                      </MDBCard>
                    </MDBCol>

                    <MDBCol size="6">
                      <MDBCard >
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                        <p className="text-center"><small style={{color:'black'}}>Buenos Aires</small></p>
                      </MDBCard>
                    </MDBCol>

                </MDBRow>

                <MDBRow>

                     <MDBCol size="6">
                      <MDBCard >
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                        <p className="text-center"><small style={{color:'black'}}>Sunderland</small></p>
                      </MDBCard>
                    </MDBCol>

                    <MDBCol size="6">
                      <MDBCard >
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                        <p className="text-center"><small style={{color:'black'}}>Londres</small></p>
                      </MDBCard>
                    </MDBCol>

                </MDBRow>

            </MDBCarouselItem>

            

            <MDBCarouselItem itemId="2">     

<MDBRow>

   <MDBCol size="6">
    <MDBCard size="2">
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
      <p className="text-center"><small style={{color:'black'}}>Amsterdam</small></p>
    </MDBCard>
  </MDBCol>

  <MDBCol size="6">
    <MDBCard >
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
      <p className="text-center"><small style={{color:'black'}}>New York</small></p>
    </MDBCard>
  </MDBCol>

</MDBRow>

<MDBRow>

   <MDBCol size="6">
    <MDBCard >
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />      
      <p className="text-center"><small style={{color:'black'}}>Barcelona</small></p>      
    </MDBCard>
  </MDBCol>

  <MDBCol size="6">
    <MDBCard >
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
      <p className="text-center"><small style={{color:'black'}}>Berlin</small></p>
    </MDBCard>
  </MDBCol>

</MDBRow>

</MDBCarouselItem>



<MDBCarouselItem itemId="3">     

<MDBRow>

   <MDBCol size="6">
    <MDBCard >
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
      <p className="text-center"><small style={{color:'black'}}>Praga</small></p>
    </MDBCard>
  </MDBCol>

  <MDBCol size="6">
    <MDBCard >
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
      <p className="text-center"><small style={{color:'black'}}>Rio de Janeiro</small></p>
    </MDBCard>
  </MDBCol>

</MDBRow>

<MDBRow>

   <MDBCol size="6">
    <MDBCard >
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
      <p className="text-center"><small style={{color:'black'}}>Bogotá</small></p>
    </MDBCard>
  </MDBCol>

  <MDBCol size="6">
    <MDBCard >
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
      <p className="text-center"><small style={{color:'black'}}>Madrid</small></p>
    </MDBCard>
  </MDBCol>

</MDBRow>

</MDBCarouselItem>



<MDBCarouselItem itemId="4">     

<MDBRow>

   <MDBCol size="6">
    <MDBCard >
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
      <MDBCardBody>
        <MDBCardText>MDBCard title</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>

  <MDBCol size="6">
    <MDBCard >
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
      <MDBCardBody>
        <MDBCardText>MDBCard title</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>

</MDBRow>

<MDBRow>

   <MDBCol size="6">
    <MDBCard >
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
      <MDBCardBody>
        <MDBCardText>MDBCard title</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>

  <MDBCol size="6">
    <MDBCard >
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
      <MDBCardBody>
        <MDBCardText>MDBCard title</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>

</MDBRow>

</MDBCarouselItem>



            <MDBRow>
                
            </MDBRow>
                

           

                    
                
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
          
        );        
    }

export default CarouselA;
