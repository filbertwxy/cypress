import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import { inventorySelectors } from '../../../support/selectors/inventory'


When('user click edit inventory',()=>{
cy.get(inventorySelectors.inventory.editBtn).first().click();
})

When('user go to edit page',()=>{
 cy.get('span.text-xl.font-bold')
  .invoke('text')
  .should('include', 'Ubah Produk');
})
When('user edit product name',()=>{
 cy.inputRandomName();
 })
 When('click submit edit inventory',()=>{
cy.get(inventorySelectors.inventory.submitBtn)
.eq(0)
.click()
 })
 Then('inventory product name will successfully edited',()=>{
const editedInventory = Cypress.env('randomProductName');
    cy.get('#0_name').find('div.line-clamp-2')
    .should('include.text',editedInventory)
 })
