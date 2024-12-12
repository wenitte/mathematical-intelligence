# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_plus_Arbitrary_Function_in_terms_of_Fibonacci_Numbers/Lemma



Lemma for Fibonacci Number plus Arbitrary Function in terms of Fibonacci Numbers
Let $\map f n$ be an arbitrary arithmetic function.
Let $\sequence {a_n}$ be the sequence defined as:

$a_n = \begin{cases}
0 & : n = 0 \\
1 & : n = 1 \\
a_{n - 1} + a_{n - 2} + \map f {n - 2} & : n > 1
\end{cases}$
Then:

$a_n = F_n + \ds \sum_{k \mathop = 0}^{n - 2} F_{n - k - 1} \map f k$


Proof
Trying out a few values:














\(\ds a_0\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds F_0\)
























\(\ds a_1\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds F_1\)
























\(\ds a_2\)

\(=\)







\(\ds a_1 + a_0 + \map f 0\)




















\(\ds \)

\(=\)







\(\ds F_1 + F_0 + \map f 0\)




















\(\ds \)

\(=\)







\(\ds F_2 + F_1 \map f 0\)
























\(\ds a_3\)

\(=\)







\(\ds a_2 + a_1 + \map f 1\)




















\(\ds \)

\(=\)







\(\ds F_2 + F_1 \map f 0 + F_1 + \map f 1\)




















\(\ds \)

\(=\)







\(\ds F_3 + F_2 \map f 0 + F_1 \map f 1\)
























\(\ds a_4\)

\(=\)







\(\ds a_3 + a_2 + \map f 2\)




















\(\ds \)

\(=\)







\(\ds F_3 + F_2 \map f 0 + F_1 \map f 1 + F_2 + F_1 \map f 0 + \map f 2\)




















\(\ds \)

\(=\)







\(\ds F_4 + F_3 \map f 0 + F_2 \map f 1 + F_1 \map f 2\)
























\(\ds a_5\)

\(=\)







\(\ds a_4 + a_3 + \map f 3\)




















\(\ds \)

\(=\)







\(\ds F_4 + F_3 \map f 0 + F_2 \map f 1 + F_1 \map f 2 + F_3 + F_2 \map f 0 + F_1 \map f 1 + \map f 3\)




















\(\ds \)

\(=\)







\(\ds F_5 + F_4 \map f 0 + F_3 \map f 1 + F_2 \map f 2 + F_1 \map f 3\)










The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$a_n = F_n + \ds \sum_{k \mathop = 1}^{n - 1} F_{n - k - 1} \map f k$

$\map P 0$ is the case:














\(\ds F_0 + \sum_{k \mathop = 0}^{0 - 2} F_{0 - k - 1} \map f k\)

\(=\)







\(\ds F_0\)





as the summation is vacuous














\(\ds \)

\(=\)







\(\ds 0\)





Definition of Fibonacci Number: $F_0 = 0$














\(\ds \)

\(=\)







\(\ds a_0\)





by definition



Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds F_1 + \sum_{k \mathop = 0}^{1 - 2} F_{1 - k - 1} \map f k\)

\(=\)







\(\ds F_1\)





as the summation is vacuous














\(\ds \)

\(=\)







\(\ds 1\)





Definition of Fibonacci Number: $F_1 = 1$














\(\ds \)

\(=\)







\(\ds a_1\)





by definition




Thus $\map P 1$ is seen to hold.

$\map P 2$ is the case:














\(\ds F_2 + \sum_{k \mathop = 0}^{2 - 2} F_{2 - k - 1} \map f k\)

\(=\)







\(\ds F_2 + F_1 \map f 0\)




















\(\ds \)

\(=\)







\(\ds F_2 + \map f 0\)





Definition of Fibonacci Number: $F_1 = 1$














\(\ds \)

\(=\)







\(\ds F_1 + F_0 + \map f 0\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds 1 + 0 + \map f 0\)





Definition of Fibonacci Number: $F_1 = 1, F_0 = 0$














\(\ds \)

\(=\)







\(\ds a_1 + a_0 + \map f 0\)





by definition




Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$a_r = F_r + \ds \sum_{k \mathop = 0}^{r - 2} F_{r - k - 1} \map f k$
and:

$a_{r - 1} = F_{r - 1} + \ds \sum_{k \mathop = 0}^{r - 3} F_{r - k - 2} \map f k$

from which it is to be shown that:

$a_{r + 1} = F_{r + 1} + \ds \sum_{k \mathop = 0}^{r - 1} F_{r - k} \map f k$


Induction Step
This is the induction step:















\(\ds a_{r + 1}\)

\(=\)







\(\ds a_{r - 1} + a_r + \map f {r - 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {F_{r - 1} + \sum_{k \mathop = 0}^{r - 3} F_{r - k - 2} \map f k} + \paren {F_r + \sum_{k \mathop = 0}^{r - 2} F_{r - k - 1} \map f k} + \map f {r - 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds F_{r + 1} + \sum_{k \mathop = 0}^{r - 3} F_{r - k - 2} \map f k + \sum_{k \mathop = 0}^{r - 2} F_{r - k - 1} \map f k + F_1 \map f {r - 1}\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_{r + 1} + \sum_{k \mathop = 0}^{r - 3} \paren {F_{r - k - 2} + F_{r - k - 1} } \map f k + F_{r - \paren {r - 2} - 1} \map f {r - 2} + F_1 \map f {r - 1}\)





factoring out the summation














\(\ds \)

\(=\)







\(\ds F_{r + 1} + \sum_{k \mathop = 0}^{r - 3} F_{r - k} \map f k + F_1 \map f {r - 2} + F_1 \map f {r - 1}\)





Definition of Fibonacci Number and simplifying














\(\ds \)

\(=\)







\(\ds F_{r + 1} + \sum_{k \mathop = 0}^{r - 3} F_{r - k} \map f k + F_2 \map f {r - 2} + F_1 \map f {r - 1}\)





Definition of Fibonacci Number: $F_1 = F_2 = 1$














\(\ds \)

\(=\)







\(\ds F_{r + 1} + \sum_{k \mathop = 0}^{r - 1} F_{r - k} \map f k\)









So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$a_n = F_n + \ds \sum_{k \mathop = 0}^{n - 2} F_{n - k - 1} \map f k$
$\blacksquare$





