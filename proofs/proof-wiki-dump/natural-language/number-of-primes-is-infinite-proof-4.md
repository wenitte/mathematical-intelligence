# 

Source: https://proofwiki.org/wiki/Number_of_Primes_is_Infinite/Proof_4



Theorem
The number of primes is infinite.


Proof
Aiming for a contradiction, suppose there exist only a finite number of primes.
From Sum of Reciprocals of Powers as Euler Product:

$\ds \sum_{n \mathop \ge 1} \dfrac 1 {n^z} = \prod_p \frac 1 {1 - p^{-z} }$
When $z = 1$ this gives:

$\ds \sum_{n \mathop \ge 1} \dfrac 1 n = \prod_p \frac 1 {1 - 1 / p}$

There is believed to be a mistake here, possibly a typo.In particular: You cannot choose $z=1$ because Sum of Reciprocals of Powers as Euler Product requires $\map \Re z > 1$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

As by hypothesis there exist only a finite number of primes, the right hand side is also finite.
But from Harmonic Series is Divergent, the left hand side diverges to infinity.
The result follows by Proof by Contradiction.
$\blacksquare$


Historical Note
This proof that the number of primes is infinite was devised by Leonhard Paul Euler.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.19$: The Series $\sum 1/ p_n$ of the Reciprocals of the Primes




