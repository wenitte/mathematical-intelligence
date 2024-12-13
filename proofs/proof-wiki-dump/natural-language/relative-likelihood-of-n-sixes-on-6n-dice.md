# 

Source: https://proofwiki.org/wiki/Relative_Likelihood_of_n_Sixes_on_6n_Dice



Problem
Which is more likely:

to throw at least $1$ six with $6$ dice
to throw at least $2$ sixes with $12$ dice
to throw at least $3$ six with $18$ dice?


Solution
The chance of getting $1$ six and $5$ other outcomes in a particular order is $\paren {\dfrac 1 6} \paren {\dfrac 5 6}^5$.
We need to multiply by the number of orders for $1$ six and $5$ non-sixes.
Therefore the probability of exactly $1$ six is:

$\dbinom 6 1 \paren {\dfrac 1 6} \paren {\dfrac 5 6}^5$
Similarly, the probability of exactly $x$ sixes when $6$ dice are thrown is:

$\dbinom 6 x \paren {\dfrac 1 6}^x \paren {\dfrac 5 6}^{6 - x}$
for $x = 0, 1, 2, 3, 4, 5, 6$.
The probability of $x$ sixes for $n$ dice is:

$\dbinom n x \paren {\dfrac 1 6}^x \paren {\dfrac 5 6}^{n - x}$
for $x = 0, 1, 2, \ldots, n$.
according to the binomial distribution.
The probability of $1$ of more sixes with $6$ dice is the complement of the probability of $0$ sixes:

$1 - \dbinom 6 0 \paren {\dfrac 1 6}^0 \paren {\dfrac 5 6}^6 \approx 0.665$
When $6 n$ dice are rolled, the probability of $n$ or more sixes is:

$\ds \sum_{x \mathop = n}^{6 n} \dbinom {6 n} x \paren {\dfrac 1 6}^x \paren {\dfrac 5 6}^{6 n - x}$
which equals:

$1 - \ds \sum_{n \mathop = 0}^{n - 1} \dbinom {6 n} x \paren {\dfrac 1 6}^x \paren {\dfrac 5 6}^{6 n - x}$
Calculating the probabilities, we get:




$6 n$

$n$

$\map P {\text {$n$ or more sixes} }$


$6$

$1$

$0.665$


$12$

$2$

$0.619$


$18$

$3$

$0.597$


$24$

$2$

$0.584$


$30$

$5$

$0.576$


$96$

$16$

$0.542$


$600$

$100$

$0.517$


$900$

$150$

$0.514$

It is clear that the gambler does better by betting on $1$ six on $6$ dice than $2$ on $12$ or $3$ on $18$.
$\blacksquare$


Historical Note
According to David Wells in his Curious and Interesting Puzzles, this question was asked by the famous diarist Samuel Pepys of Isaac Newton in $1693$.


Sources
1987: Frederick Mosteller: Fifty Challenging Problems in Probability with Solutions (2nd ed.)
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Prince Rupert's Cube: $129$




