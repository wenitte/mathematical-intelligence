# 

Source: https://proofwiki.org/wiki/Primes_of_form_Power_Less_One



Theorem
Let $m, n \in \N_{>0}$ be natural numbers.
Let $m^n - 1$ be prime.

Then $m = 2$ and $n$ is prime.


Proof
First we note that by Integer Less One divides Power Less One:

$\paren {m - 1} \divides \paren {m^n - 1}$
where $\divides$ denotes divisibility.
Thus $m^n - 1$ is composite for all $m \in \Z: m > 2$.

Let $m = 2$, and consider $2^n - 1$.

Suppose $n$ is composite.
Then $n = r s$ where $r, s \in \Z_{> 1}$.
Then by the corollary to Integer Less One divides Power Less One:

$\paren {2^r - 1} \divides \paren {2^{r s} - 1}$

Thus if $n$ is composite, then so is $2^n - 1$.
So $2^n - 1$ can be prime only when $n$ is prime.
$\blacksquare$


Also see
Primes of the form $2^n - 1$ are called Mersenne primes.
They are particularly interesting because there is a convenient algorithm (the Lucas-Lehmer Test) which can determine the primality of such a number with high computational efficiency.
Hence, at the present time, the largest primes known are Mersenne.


Historical Note
The proof that if $n$ is composite, then so is $2^n - 1$, is historically attributed to Cataldi, who gave it in $1603$.
Marin Mersenne was aware of this result, but took it further to ask the question as to which numbers of the form $2^p - 1$ are prime when $p$ is prime.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{IX}$. Proposition $36$: Footnote
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.4$: The rational numbers and some finite fields: Further Exercises $7$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $127$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.2$: More about Numbers: Irrationals, Perfect Numbers and Mersenne Primes
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $18 \ (5)$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $127$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Mersenne numbers
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): perfect number
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Mersenne numbers
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): perfect number




