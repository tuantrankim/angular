import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component:VoteComponent;
  beforeEach(()=>{
    component = new VoteComponent();
  });

  // afterEach(()=>{
  //   // Clean up if any    
  // });

  // beforeAll();
  // afterAll();

  it('should increment totalVotes when upvoted', () => {
    // Arrange outside
    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    // Arrange outside 
    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});