# 

Source: https://proofwiki.org/wiki/Equality_of_Ordered_Tuples



Theorem
Let $a = \tuple {a_1, a_2, \ldots, a_n}$ and $b = \tuple {b_1, b_2, \ldots, b_n}$ be ordered tuples.
Then:

$a = b \iff \forall i: 1 \le i \le n: a_i = b_i$
That is, for two ordered tuples to be equal, all the corresponding elements have to be equal.


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\tuple {a_1, a_2, \ldots, a_n} = \tuple {b_1, b_2, \ldots, b_n} \iff \forall i: 1 \le i \le n: a_i = b_i$

$\map P 1$ is true, as this just says $\tuple {a_1} = \tuple {b_1} \iff a_1 = b_1$ which is trivial.


Basis for the Induction
$\map P 2$ is the case:

$\tuple {a_1, a_2} = \tuple {b_1, b_2} \iff a_1 = b_1, a_2 = b_2$
which has been proved in Equality of Ordered Pairs.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\tuple {a_1, a_2, \ldots, a_k} = \tuple {b_1, b_2, \ldots, b_k} \iff \forall i: 1 \le i \le n: a_i = b_i$

Then we need to show:

$\tuple {a_1, a_2, \ldots, a_{k + 1} } = \tuple {b_1, b_2, \ldots, b_{k + 1} } \iff \forall i: 1 \le i \le n: a_i = b_i$


Induction Step
This is our induction step:














\(\ds \tuple {a_1, a_2, \ldots, a_{k + 1} }\)

\(=\)







\(\ds \tuple {b_1, b_2, \ldots, b_{k + 1} }\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \tuple {a_1, \tuple {a_2, \ldots, a_{k + 1} } }\)

\(=\)







\(\ds \tuple {b_1, \tuple {b_2, \ldots, b_{k + 1} } }\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a_1\)

\(=\)







\(\ds b_1\)














\(\ds \land \ \ \)





\(\ds \tuple {a_2, \ldots, a_{k + 1} }\)

\(=\)







\(\ds \tuple {b_2, \ldots, b_{k + 1} }\)





Basis for the Induction




But from the induction hypothesis we have that:

$\tuple {a_2, \ldots, a_{k + 1} } = \tuple {b_2, \ldots, b_{k + 1} } \iff \forall i: 1 \le 2 \le k + 1: a_i = b_i$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{>0}: \tuple {a_1, a_2, \ldots, a_n} = \tuple {b_1, b_2, \ldots, b_n} \iff \forall i: 1 \le i \le n: a_i = b_i$
$\blacksquare$


Examples
Ordered Triple
Let:

$\tuple {a_1, a_2, a_3}$ and $\tuple {b_1, b_2, b_3}$
be ordered triples.

Then:

$\tuple {a_1, a_2, a_3} = \tuple {b_1, b_2, b_3}$
if and only if:

$\forall i \in \set {1, 2, 3}: a_i = b_i$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.15$: Sequences
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 8$: Cartesian product of sets
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.4$: Sets of Sets
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.10$: Finite Sequences
2002: Thomas Jech: Set Theory (3rd ed.) ... (previous) ... (next): Chapter $1$: Pairing




