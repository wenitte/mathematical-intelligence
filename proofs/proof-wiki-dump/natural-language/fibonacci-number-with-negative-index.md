# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_with_Negative_Index



Theorem
Let $F_n$ be the $n$th Fibonacci number.

Then:

$\forall n \in \Z_{> 0} : F_{-n} = \paren {-1}^{n + 1} F_n$


Proof
From the initial definition of Fibonacci numbers, we have:

$F_0 = 0, F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3$
By definition of the extension of the Fibonacci numbers to negative integers:

$F_n = F_{n + 2} - F_{n - 1}$

The proof proceeds by induction.

For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$F_{-n} = \paren {-1}^n F_n$


Basis for the Induction
$\map P 1$ is the case:














\(\ds F_{-1}\)

\(=\)







\(\ds F_1 - F_0\)




















\(\ds \)

\(=\)







\(\ds 1 - 0\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{1 + 1} F_1\)









So $\map P 1$ is seen to hold.

$\map P 2$ is the case:














\(\ds F_{-2}\)

\(=\)







\(\ds F_0 - F_{-1}\)




















\(\ds \)

\(=\)







\(\ds 0 - 1\)




















\(\ds \)

\(=\)







\(\ds -1\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{2 + 1} F_2\)









So $\map P 2$ is seen to hold.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ and $\map P {k - 1}$ are true, where $k > 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$F_{-\paren {k - 1} } = \paren {-1}^k F_{k - 1}$
$F_{-k} = \paren {-1}^{k + 1} F_k$

Then we need to show:

$F_{-\paren {k + 1} } = \paren {-1}^{k + 2} F_{k + 1}$


Induction Step
This is our induction step:














\(\ds F_{-\paren {k + 1} }\)

\(=\)







\(\ds F_{-\paren {k - 1} } - F_{-k}\)





Definition of Fibonacci Number for Negative Index














\(\ds \)

\(=\)







\(\ds \paren {-1}^k F_{k - 1} - \paren {-1}^{k + 1} F_k\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {-1}^k F_{k - 1} + \paren {-1}^k F_k\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^k \paren {F_{k - 1} + F_k}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^k \paren {F_{k + 1} }\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds \paren {-1}^{k + 2} \paren {F_{k + 1} }\)









So $\map P k \land \map P {k - 1} \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>0} : F_{-n} = \paren {-1}^{n + 1} F_n$
$\blacksquare$


Sources
1957: George Bergman: Number System with an Irrational Base (Math. Mag. Vol. 31, no. 2: pp. 98 – 110)  www.jstor.org/stable/3029218
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $8$




