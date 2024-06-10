import React from 'react'
import Navbar from './Navbar'

const FaqPage = () => {
  return (
    <div>
      <div className="container">
        <Navbar/>
        <br />
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="card text-center bg-danger-subtle">
              <div className="card-body">
                <h2 className="card-text"><i>FAQs</i></h2>
                <p className="card-text"><i>Here are some of the Frequently Asked Questions to us.</i></p>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="card bg-danger-subtle">
              <div className="card-body">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      What is the process for purchasing tickets?
                      </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Tickets can be purchased through our official event website, authorized ticket outlets, or at the event venue (if not sold out). Online purchases will require a valid credit/debit card.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">                       
                      Can I get a refund if I can’t attend the event?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body"> Refund policies vary per event. Generally, tickets are non-refundable unless the event is canceled or rescheduled. Please check the specific event's refund policy on our website.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      Are there any discounts available for tickets?
                      </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body"> Yes, discounts may be available for early bird purchases, group bookings, students, seniors, or members. Please check the event details for any applicable discounts.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        How do I contact customer support?
                      </button>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">You can contact us through our mail <a href="">celebraze@gmail.com</a> or call us on <a href="">+91 9888776650</a>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                      How do I purchase tickets online?
                      </button>
                    </h2>
                    <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Visit our official event website, select the event you want to attend, choose your ticket type and quantity, then proceed to checkout. Fill in the required payment and personal details to complete the purchase.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                      How will I receive my tickets if I buy them online?
                      </button>
                    </h2>
                    <div id="flush-collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body"> You will receive an e-ticket via email. You can print this ticket or present it on your mobile device at the event entrance.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                      Can I buy tickets at the venue?
                      </button>
                    </h2>
                    <div id="flush-collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Yes, if the event is not sold out. We recommend buying in advance to avoid disappointment.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                      What if I lose my ticket?
                      </button>
                    </h2>
                    <div id="flush-collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">If you lose your e-ticket, you can reprint it from the confirmation email. If you lose a physical ticket, contact customer support for assistance, but please note that replacing a physical ticket may not always be possible.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
                      How do I transfer my ticket to someone else?
                      </button>
                    </h2>
                    <div id="flush-collapseThirteen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">If the event allows ticket transfers, you can transfer your ticket by following the instructions provided on the event website or contacting customer support. There may be a transfer fee.
                      .</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen" aria-expanded="false" aria-controls="flush-collapseFourteen">
                      What happens if the event is canceled or rescheduled?
                      </button>
                    </h2>
                    <div id="flush-collapseFourteen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body"> If an event is canceled, you will receive a full refund. If an event is rescheduled, your ticket will typically be valid for the new date, or you can request a refund if you cannot attend.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifteen" aria-expanded="false" aria-controls="flush-collapseFifteen">
                      Are there any age restrictions for ticket purchases?
                      </button>
                    </h2>
                    <div id="flush-collapseFifteen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Yes, there may be a limit on the number of tickets you can purchase to ensure fair access for all attendees. Check the event details for specific limits.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="card bg-danger-subtle text-center">
              <div className="card-body">
                <h3 className="card-text">For More Enquiry...Contact Us</h3>
                <h6 className="card-text">Email : celebraze@gmail.com</h6>
                <h6 className="card-text">Phone : +91 9888776650</h6>              
                <p className="card-text">or <a href="/ContactUs">Click Here </a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default FaqPage
