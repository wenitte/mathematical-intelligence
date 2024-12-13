# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/223_-_The_Tower_of_Pisa/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $223$
The Tower of Pisa
Suppose you were on the top of the Tower of Pisa, at a point where it leans exactly $179$ feet above the ground.
Suppose you were to drop an elastic ball from there such that on each rebound it rose exactly one-tenth of the height from which it fell.
What distance would the ball travel before it came to rest?


Solution
$218$ feet $9 \tfrac 1 3$ inches.


Proof
Let $d$ feet be the distance travelled.
First the ball falls $179$ feet.
After the first bounce, it goes up again $\dfrac {179} {10}$ feet and down again the same distance.
Similarly, after the second bounce, it goes up again $\dfrac {179} {10^2}$ feet and down again the same distance.
After the $n$th bounce,  it goes up again $\dfrac {179} {10^n}$ feet and down again the same distance.
So the total distance travelled is given by:

$\ds d = 179 + 2 \times \dfrac {179} {10} \sum_{n \mathop \ge 0} \paren {\dfrac 1 {10} }^n$
which from Sum of Infinite Geometric Sequence gives:














\(\ds d\)

\(=\)







\(\ds 179 + 2 \times \dfrac {179} {10} \sum_{n \mathop \ge 0} \paren {\dfrac 1 {10} }^n\)




















\(\ds \)

\(=\)







\(\ds 179 + 2 \times \dfrac {179} {10} \dfrac 1 {1 - 1/10}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds 179 + 2 \times \dfrac {179} {10} \dfrac {10} 9\)





simplification














\(\ds \)

\(=\)







\(\ds 179 + 39 \tfrac 7 9\)





more simplification














\(\ds \)

\(=\)







\(\ds 218 \tfrac 7 9\)





more simplification



The answer given follows after we recall that $1$ foot is $12$ inches.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $223$. -- The Tower of Pisa
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $241$. The Tower of Pisa




