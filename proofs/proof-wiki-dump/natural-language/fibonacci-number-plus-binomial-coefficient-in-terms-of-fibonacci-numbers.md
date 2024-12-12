# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_plus_Binomial_Coefficient_in_terms_of_Fibonacci_Numbers



Theorem
Let $m \in \Z_{>0}$ be a positive integer.
Let $\sequence {a_n}$ be the sequence defined as:

$a_n = \begin{cases} 0 & : n = 0 \\ 1 & : n = 1 \\ a_{n - 2} + a_{n - 1} + \dbinom {n - 2} m & : n > 1 \end{cases}$
where $\dbinom {n - 2} m$ denotes a binonial coefficient.

Then $\sequence {a_n}$  can be expressed in Fibonacci numbers as:

$a_n = F_{m + 1} F_{n - 1} + \paren {F_{m + 2} + 1} F_n - \ds \sum_{k \mathop = 0}^m \binom {n + m - k} k$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$a_n = F_{m + 1} F_{n - 1} + \paren {F_{m + 2} + 1} F_n - \ds \sum_{k \mathop = 0}^m \binom {n + m - k} k$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \)

\(\)







\(\ds F_{m + 1} F_{-1} + \paren {F_{m + 2} + 1} F_0 - \sum_{k \mathop = 0}^m \binom {m - k} k\)




















\(\ds \)

\(=\)







\(\ds F_{m + 1} \paren {-1}^0 F_1 + \paren {F_{m + 2} + 1} F_0 - \sum_{k \mathop = 0}^m \binom {m - k} k\)





Fibonacci Number with Negative Index














\(\ds \)

\(=\)







\(\ds F_{m + 1} - \sum_{k \mathop = 0}^m \binom {m - k} k\)





Definition of Fibonacci Number: $F_0 = 0, F_1 = 1$














\(\ds \)

\(=\)







\(\ds F_{m + 1} - F_{m + 1}\)





Sum of Entries in Lesser Diagonal of Pascal's Triangle equal Fibonacci Number: binomial coefficients vanish for $k > m$














\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds a_0\)





by definition



Thus $\map P 0$ is seen to hold.

$\map P 1$ is the case:














\(\ds \)

\(\)







\(\ds F_{m + 1} F_0 + \paren {F_{m + 2} + 1} F_1 - \sum_{k \mathop = 0}^m \binom {1 + m - k} k\)




















\(\ds \)

\(=\)







\(\ds \paren {F_{m + 2} + 1} - \sum_{k \mathop = 0}^m \binom {1 + m - k} k\)





Definition of Fibonacci Number: $F_0 = 0, F_1 = 1$














\(\ds \)

\(=\)







\(\ds F_{m + 2} + 1 - F_{m + 2}\)





Sum of Entries in Lesser Diagonal of Pascal's Triangle equal Fibonacci Number: binomial coefficients vanish for $k > m$














\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds a_1\)





by definition



Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P {k - 1}$ and $\map P k$ are true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$a_{k - 1} = F_{m + 1} F_{k - 2} + \paren {F_{m + 2} + 1} F_{k - 1} - \ds \sum_{r \mathop = 0}^m \binom {k - 1 + m - r} r$
$a_k = F_{m + 1} F_{k - 1} + \paren {F_{m + 2} + 1} F_k - \ds \sum_{r \mathop = 0}^m \binom {k + m - r} r$

from which it is to be shown that:

$a_{k + 1} = F_{m + 1} F_k + \paren {F_{m + 2} + 1} F_{k + 1} - \ds \sum_{r \mathop = 0}^m \binom {k + 1 + m - r} r$


Induction Step
This is the induction step:















\(\ds a_{k + 1}\)

\(=\)







\(\ds a_{k - 1} + a_k + \binom {k - 1} m\)




















\(\ds \)

\(=\)







\(\ds \paren {F_{m + 1} F_{k - 2} + \paren {F_{m + 2} + 1} F_{k - 1} - \sum_{r \mathop = 0}^m \binom {k - 1 + m - r} r} + \paren {F_{m + 1} F_{k - 1} + \paren {F_{m + 2} + 1} F_k - \sum_{r \mathop = 0}^m \binom {k + m - r} r} + \binom {k - 1} m\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds F_{m + 1} \paren {F_{k - 2} + F_{k - 1} } + \paren {F_{m + 2} + 1} \paren {F_{k - 1} + F_k} - \sum_{r \mathop = 0}^m \binom {k + m - \paren {r + 1} } r - \sum_{r \mathop = 0}^m \binom {k + m - r} r + \binom {k - 1} m\)





factorizing














\(\ds \)

\(=\)







\(\ds F_{m + 1} F_k + \paren {F_{m + 2} + 1} F_{k + 1} - \sum_{r \mathop = 0}^m \binom {k + m - \paren {r + 1} } r - \sum_{r \mathop = 0}^m \binom {k + m - r} r + \binom {k - 1} m\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_{m + 1} F_k + \paren {F_{m + 2} + 1} F_{k + 1} - \sum_{r \mathop = 1}^{m + 1} \binom {k + m - r} {r - 1} - \sum_{r \mathop = 0}^m \binom {k + m - r} r + \binom {k - 1} m\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds F_{m + 1} F_k + \paren {F_{m + 2} + 1} F_{k + 1} - \sum_{r \mathop = 0}^m \binom {k + m - r} {r - 1} + \binom {k + m} {-1} - \binom {k - 1} m - \sum_{r \mathop = 0}^m \binom {k + m - r} r + \binom {k - 1} m\)




















\(\ds \)

\(=\)







\(\ds F_{m + 1} F_k + \paren {F_{m + 2} + 1} F_{k + 1} - \sum_{r \mathop = 0}^m \paren {\binom {k + m - r} {r - 1} + \binom {k + m - r} r}\)





N Choose Negative Number is Zero














\(\ds \)

\(=\)







\(\ds F_{m + 1} F_k + \paren {F_{m + 2} + 1} F_{k + 1} - \sum_{r \mathop = 0}^m \binom {k + 1 + m - r} r\)





Pascal's Rule



So $\map P {k - 1} \land \map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: a_n = F_{n - 1} r + F_n s$
$\blacksquare$

Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $14$




