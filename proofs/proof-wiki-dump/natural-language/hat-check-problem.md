# 

Source: https://proofwiki.org/wiki/Hat-Check_Problem



Classic Problem
The traditional wording of the question is as follows.
A hat-check girl completely loses track of which of $n$ hats belong to which owners, and hands them back at random to their $n$ owners as the latter leave.
What is the probability $p_n$ that nobody receives their own hat back?


Solution
Put into bald mathematical language, this boils down to:
For a set $S$ of $n$ elements, what is the number of derangements of $S$ divided by the number of permutations of $S$?
The answer is: approximately $\dfrac 1 e$, which can be demonstrated as follows.

Let $D_n$ be the number of derangements of a set of size $n$.
We have that:

The Number of Permutations of a set of size $n$ is $n!$.
The Closed Form for Number of Derangements on Finite Set of size $n$ is:
$D_n = n! \paren {1 - \dfrac 1 {1!} + \dfrac 1 {2!} - \dfrac 1 {3!} + \dotsb + \paren {-1}^n \dfrac 1 {n!} }$

So:














\(\ds p_n\)

\(=\)







\(\ds \dfrac {D_n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {!n} {n!}\)





Closed Form for Number of Derangements on Finite Set














\(\ds \)

\(=\)







\(\ds \dfrac {n! \ds \sum_{k \mathop = 0}^n \frac {\paren {-1}^k} {k!} } {n!}\)





Definition of Subfactorial














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \frac {\paren {-1}^k} {k!}\)




















\(\ds \)

\(=\)







\(\ds 1 - \dfrac 1 {1!} + \dfrac 1 {2!} - \dfrac 1 {3!} + \dotsb + \paren {-1}^n \dfrac 1 {n!}\)










Finally:

$1 - \dfrac 1 {1!} + \dfrac 1 {2!} - \dfrac 1 {3!} + \dotsb$
converges to $\dfrac 1 e$ by Taylor Series Expansion for Exponential Function.
$\blacksquare$


Note
The accuracy of this estimate increases with increasing $n$.

Specifically, the error of the estimate is:

$\ds \sum_{k \mathop = 0}^{\infty} \frac {\paren {-1}^k } {k!} - \sum_{k \mathop = 0}^n \frac {\paren {-1}^k } {k!} = \sum_{k \mathop = {n + 1} }^{\infty} \frac {\paren {-1}^k } {k!}$

Therefore, as $n \to \infty$, the error goes to $0$

$\ds \lim_{n \mathop \to \infty} \paren {\sum_{k \mathop = 0}^{\infty} \frac {\paren {-1}^k } {k!} - \sum_{k \mathop = 0}^n \frac {\paren {-1}^k } {k!} } = 0$

If the venue in question is Hilbert's Hotel, then the answer is precise.


Examples
Example: $n = 3$
$p_3 = \dfrac 1 3$


Example: $n = 8$
$p_8 = \dfrac {2119} {5760}$


Also known as
This problem is also known as the envelope problem, couched in the language of an incompetent secretary placing letters at random into the envelopes without checking the address on the envelope matches the addressee of the letter.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $0 \cdotp 367 \, 879 \, 441 \, 171 \, 442 \, 321 \, 595 \, 523 \, 770 \, 161 \, 460 \, 867 \, 445 \, 811 \, 131 \, 031$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $0 \cdotp 36787 \, 94411 \, 71442 \, 32159 \, 55237 \, 70161 \, 46086 \, 74458 \, 11131 \, 031$




