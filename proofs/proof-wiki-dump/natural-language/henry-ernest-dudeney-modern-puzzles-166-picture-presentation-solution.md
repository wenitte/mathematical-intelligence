# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/166_-_Picture_Presentation/Solution



Modern Puzzles by Henry Ernest Dudeney: $166$
Picture Presentation
A wealthy collector had ten valuable pictures.
He proposed to make a presentation to a public gallery, but could not make up his mind as to how many he would give.
So it amused him to work out the exact number of different ways.
You see, he could give any one picture, any two, any three, and so on, or give the whole ten.


Solution
$1023$, or $1024$ if you include the possibility of not giving any of his pictures at all.


Proof 1
For each picture, the collector can choose to give it away or to keep it.
He has to make this choice $10$ times in a row.
Hence he would have $2^{10} = 1024$ options, including not giving away any.
$\blacksquare$


Proof 2
The number of ways you can pick $r$ pictures from a collection of $10$ is equal to the binomial coefficient $\dbinom n r$, which is given by:

$\dbinom n r = \dfrac {n!} {r! \paren {n - r}!}$
Hence the total number of ways the collector can make part or all of his collection available to the public is:

$\ds \sum_{k \mathop = 1}^n \dbinom {10} k$
which is equal to:

$\ds \sum_{k \mathop = 0}^n \dbinom {10} k - \dbinom {10} 0$
From Sum of Binomial Coefficients over Lower Index:

$\ds \sum_{k \mathop = 0}^n \dbinom {10} k = 2^{10} = 1024$
while from Binomial Coefficient with Zero:

$\dbinom {10} 0$
Hence if the collector wants to consider the option of not giving any of his paintings after all, the number of options he has is $2^{10} = 1024$.
If he is committed to giving at least $1$, then the option of giving none is off the table, so the answer is $1023$.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $166$. -- Picture Presentation
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $445$. Picture Presentation




