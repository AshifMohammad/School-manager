
import SchoolViwer from "../SchoolViewer";
import {render,screen } from '@testing-library/react'





describe('<SchoolManagerContainer/> Test: Whether or not the container contains the <SchoolListContainer/> and <SchoolViewer/>',()=>{

    beforeEach(()=>{
       
        render(<SchoolViwer />)
    })


    // Verify the building blocks are available 
    test('Verify whether main <SchoolViwer/> loaded without error',()=>{
        expect(screen.getByTestId('school-list-viewer')).toBeVisible()
    })
    test('Verify whether all the components are loaded successfully',()=>{
        expect(screen.getByText('School Detail Viewer')).toBeVisible()
    })   

})