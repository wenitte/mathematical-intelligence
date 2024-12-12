# 

Source: https://proofwiki.org/wiki/Divisibility_by_12



Theorem
Let $N \in \N$ be expressed as:

$N = a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n$

Then $N$ is divisible by $12$ if and only if $a_0 - 2 a_1 + 4 \paren {\ds \sum_{r \mathop = 2}^n a_r}$ is  divisible by $12$.


Proof
We first prove that $100 \times 10^n = 4 \pmod {12}$, where $n \in \N$.
Proof by induction:
For all $n \in \N$, let $P \paren n$ be the proposition:

$100 \times 10^n = 4 \pmod {12}$


Basis for the Induction
$\map P 0$ says $100 = 4 \pmod {12}$, which is true as $100 = 8 \times 12 + 4$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.
So this is our induction hypothesis:

$100 \times 10^k = 4 \pmod {12}$
Then we need to show:

$100 \times 10^{k + 1} = 4 \pmod {12}$


Induction Step
This is our induction step:














\(\ds 100 \times 10^{k + 1}\)

\(=\)







\(\ds 10 \times 100 \times 10^k \pmod {12}\)




















\(\ds \)

\(=\)







\(\ds 10 \times 4 \pmod {12}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds 4 \pmod {12}\)





$10 \times 4 = 40 = 3 \times 12 + 4$



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$100 \times 10^n = 4 \pmod {12}$

And then:














\(\ds N\)

\(=\)







\(\ds a_0 + a_1 10 + \sum^n_{r \mathop = 2} a_r 10^r\)




















\(\ds \)

\(=\)







\(\ds a_0 + a_1 10 + \sum^n_{r \mathop = 2} a_r \paren {100 \times 10^{r - 2} } \pmod {12}\)




















\(\ds \)

\(=\)







\(\ds a_0 + a_1 10 + 4 \sum^n_{r \mathop = 2} a_r \pmod {12}\)





Applying earlier result














\(\ds \)

\(=\)







\(\ds a_0 - 2 a_1 + 4 \sum^n_{r \mathop = 2} a_r \pmod {12}\)





$-2 = -1 \times 12 + 10$



Therefore:

$N = 0 \pmod {12} \iff a_0 - 2 a_1 + 4 \paren {\ds \sum_{r \mathop = 2}^n a_r} = 0 \pmod {12}$
The result follows from Congruent to Zero iff Modulo is Divisor
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $2$. Equivalence Relations: Exercise $9$




