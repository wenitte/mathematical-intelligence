# 

Source: https://proofwiki.org/wiki/Odd_Number_Theorem

  This article was Featured Proof between 1 January 2010 and 10 January 2010.


Theorem
$\ds \sum_{j \mathop = 1}^n \paren {2 j - 1} = n^2$
That is, the sum of the first $n$ odd numbers is the $n$th square number.


Corollary
A recurrence relation for the square numbers is:

$S_n = S_{n - 1} + 2 n - 1$


Visual Demonstration

$\blacksquare$


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\ds n^2 = \sum_{j \mathop = 1}^n \paren {2 j - 1}$


Basis for the Induction
$\map P 1$ is true, as this just says $1^2 = 1$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds k^2 = \sum_{j \mathop = 1}^k \paren {2 j - 1}$

Then we need to show:

$\ds \paren {k + 1}^2 = \sum_{j \mathop = 1}^{k + 1} \paren {2 j - 1}$


Induction Step
This is our induction step:














\(\ds \paren {k + 1}^2\)

\(=\)







\(\ds k^2 + 2 k + 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^k \paren {2 j - 1} + 2 k + 1\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^k \paren {2 j - 1} + 2 \paren {k + 1} - 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{k + 1} \paren {2 j - 1}\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \N: n^2 = \sum_{j \mathop = 1}^n \paren {2 j - 1}$
$\blacksquare$


Also presented as
This result can also be seen as:

$\ds \sum_{j \mathop = 0}^{n - 1} \paren {2 j + 1} = n^2$


Historical Note
Francesco Maurolico's proof of the Odd Number Theorem appears to be the first proof by induction.
It appears in his Arithmeticorum Libri Duo, written in $1557$ but not published till $1575$.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Arithmetic Series: $19.3$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-1}$ Principle of Mathematical Induction: Exercise $5$
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.6$: Mathematical Induction
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.1$ Mathematical Induction: Problems $1.1$: $1 \ \text {(b)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: Exercise $10$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $25$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $25$




