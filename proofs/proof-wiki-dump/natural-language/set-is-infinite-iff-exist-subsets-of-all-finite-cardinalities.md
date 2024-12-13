# 

Source: https://proofwiki.org/wiki/Set_is_Infinite_iff_exist_Subsets_of_all_Finite_Cardinalities



Theorem
A set $S$ is infinite if and only if for all $n \in \N$, there exists a subset of $S$ whose cardinality is $n$.


Proof
Let the cardinality of a set $S$ be denoted $\card S$.


Necessary Condition
Suppose $S$ is infinite.
We use mathematical induction on $n$.

For all $n \in \N$, let $\map P n$ be the proposition:

There exists a subset of $S$ whose cardinality is $n$.


Basis for the Induction
From Empty Set is Subset of All Sets:

$\O \subseteq S$
From Cardinality of Empty Set, its cardinality is $0$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

There exists a subset of $S$ whose cardinality is $k$.

Then we need to show:

There exists a subset of $S$ whose cardinality is $k + 1$.


Induction Step
This is our induction step:
By the induction hypothesis, there exists $T \subseteq S$ such that $\card T = k$.

First, note that $S \ne T$, otherwise by definition of infinite $S$ would be finite.
So $T$ is therefore a proper subset of $S$.

So:














\(\ds S \setminus T\)

\(\ne\)







\(\ds \O\)





Set Difference with Proper Subset














\(\ds \exists x\)

\(\in\)







\(\ds S \setminus T\)





Definition of Empty Set








\(\ds \leadsto \ \ \)





\(\ds \set x\)

\(\subseteq\)







\(\ds S \setminus T\)





Definition of Singleton








\(\ds \leadsto \ \ \)





\(\ds \set x\)

\(\subseteq\)







\(\ds S\)





Set Difference is Subset: $S \setminus T \subseteq S$








\(\ds \leadsto \ \ \)





\(\ds T \cup \set x\)

\(\subseteq\)







\(\ds S\)





$T \subseteq S$ and $\set x \subseteq S$, and Union is Smallest Superset



As $x \notin T$ it follows that:

$\set x \cap T = \O$
Thus by Cardinality of Set Union:

$\card {T \cup \set x} = k + 1$
That is, $T \cup \set x$ is a subset of $S$ whose cardinality is $k + 1$.
This is the set whose existence was to be be proved.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

For all $n \in \N$, there exists a subset of $S$ whose cardinality is $n$.
$\Box$


Sufficient Condition
Suppose that for all $n \in \N$, there exists a subset of $S$ whose cardinality is $n$.
Aiming for a contradiction, suppose that $S$ is finite.

Let $N = \card S$.
As $N \in \N$ it follows that $N + 1 \in \N$.
By hypothesis, there exists a subset $T \subseteq S$ whose cardinality is $N + 1$.
From Cardinality of Subset of Finite Set, $\card S \ge \card T$.

But then $\card S = N \ge N + 1 = \card T$, which contradicts the fact that $N < N + 1$.
From this contradiction it follows that $S$ can not be finite.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Exercise $18.18$




