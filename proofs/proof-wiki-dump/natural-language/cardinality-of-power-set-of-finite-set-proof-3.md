# 

Source: https://proofwiki.org/wiki/Cardinality_of_Power_Set_of_Finite_Set/Proof_3



Theorem
Let $S$ be a set such that:

$\card S = n$
where $\card S$ denotes the cardinality of $S$,

Then:

$\card {\powerset S} = 2^n$
where $\powerset S$ denotes the power set of $S$.


Proof
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition:

$\card S = n \implies \card {\powerset S} = 2^n$
Do not confuse $\map P n$, which is a propositional function on $\N$, with $\powerset S$, the power set of $S$.


Basis for the Induction
From Cardinality of Empty Set:

$S = \O \iff \card S = 0$
Then:

$\powerset \O = \set \O$
has one element, that is, $\O$.
So:

$\card {\powerset \O} = \card {\set \O} = 1 = 2^0$
thus confirming that $\map P 0$ holds.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\card S = k \implies \card {\powerset S} = 2^k$

Then we need to show:

$\card S = k + 1 \implies \card {\powerset S} = 2^{k + 1}$


Induction Step
This is our induction step:
Let $\card S = k + 1$.
Let $x \in S$.
Consider the set $S' = S \setminus \set x$ where $x$ is any element of $S$.
We see that $\card {S'} = k$.

Now adjoin $x$ to all the subsets of $S'$.
Counting the subsets of $S$, we have:

all the subsets of $S'$
and:

all the subsets of $S'$ with $x$ adjoined to them.
From the induction hypothesis, there are $2^k$ subsets of $S'$.
Adding $x$ to each of these does not change their number, so there are another $2^k$ subsets of $S$ consisting of all the subsets of $S'$ with $x$ adjoined to them.
In total that makes $2^k + 2^k = 2 \times 2^k = 2^{k + 1}$ subsets of $S$.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: \card S = n \implies \card {\powerset S} = 2^n$
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.6$: Theorem $8: \ 1$




