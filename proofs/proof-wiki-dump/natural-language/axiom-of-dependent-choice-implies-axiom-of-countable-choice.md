# 

Source: https://proofwiki.org/wiki/Axiom_of_Dependent_Choice_Implies_Axiom_of_Countable_Choice


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
The axiom of dependent choice implies the axiom of countable choice.


Proof
Let $\sequence {S_n}_{n \mathop \in \N}$ be a sequence of non-empty sets.
Define:

$\ds S = \bigsqcup_{n \mathop \in \N} S_n$
where $\bigsqcup$ denotes disjoint union.
Let $\RR$ be the binary endorelation on $S$ defined by:

$\tuple {x, m} \mathrel \RR \tuple {y, n} \iff n = m + 1$
Note that $\RR$ satisfies:

$\forall a \in S : \exists b \in S : a \mathrel \RR b$
Using the axiom of dependent choice, there exists a sequence $\sequence {y_n}_{n \mathop \in \N}$ in $S$ such that $y_n \mathrel \RR y_{n + 1}$ for all $n \in \N$.
Letting $y_n = \tuple {s_n, N_n}$ for all $n \in \N$, it follows by the definition of $\RR$ that $N_{n + 1} = N_n + 1$.
A straightforward application of mathematical induction shows that $N_n = n + N$ for some $N \in \N$.
So $s_n \in S_{n + N}$ for all $n \in \N$.

The cartesian product $S_0 \times S_1 \times \cdots \times S_{N - 1}$ is non-empty.
So there exists a finite sequence $x_0, x_1, \ldots, x_{N - 1}$ with $x_n \in S_n$ for all natural numbers $n < N$.
Now, define $x_n = s_{n - N}$ for all natural numbers $n \ge N$.
Then $x_n \in S_n$ for all $n \in \N$.
$\blacksquare$


Axiom of Dependent Choice
This proof depends on the Axiom of Dependent Choice.
Although not as strong as the Axiom of Choice, the Axiom of Dependent Choice is similarly independent of the Zermelo-Fraenkel axioms.
The consensus in conventional mathematics is that it is true and that it should be accepted.


Also see
Axiom of Choice Implies Axiom of Dependent Choice




