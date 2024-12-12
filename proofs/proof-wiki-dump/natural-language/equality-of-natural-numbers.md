# 

Source: https://proofwiki.org/wiki/Equality_of_Natural_Numbers

Theorem
Let $m, n \in \N$.

Then:

$\N_m \sim \N_n \iff m = n$
where $\sim$ denotes set equivalence and $\N_n$ denotes the set of all natural numbers less than $n$.


Proof
By Set Equivalence behaves like Equivalence Relation, we have that:

$m = n \implies \N_m \sim \N_n$
It remains to show that:

$m \ne n \implies \N_m \nsim \N_n$.
Since the naturals are totally ordered, it will be sufficient to show that:

$m \in \N_n \implies \N_m \nsim \N_n$
Let $S = \set {n \in \N: \forall m \in \N_n: \N_m \nsim \N_n}$.
That is, $S$ is the set of all the natural numbers $n$ such that $\N_m \nsim \N_n$ for all $m \in \N_n$.
We use mathematical induction to prove that $S = \N$.

From Initial Segment of Natural Numbers determined by Zero is Empty:

$\N_0 = \O$
Thus $0 \in S$.
This is the basis for the induction.

Now, assume the induction hypothesis that $n \in S$.
We now complete the induction step, that is, to show that $n + 1 \in S$.
Let $m \in \N_{n + 1}$.
If $m = 0$, then $\N_m \nsim \N_{n + 1}$ because $\N_0 = \O$ and $\N_{n + 1} \ne \O$.
Aiming for a contradiction, suppose that $m \ge 1$ and $\N_m \sim \N_{n + 1}$.
Then, by Set Equivalence Less One Element, that means $\N_{m - 1} \sim \N_n$.
But then $m - 1 \in \N_n$ which contradicts the induction hypothesis that $n \in S$.
Thus $n + 1 \in S$.

The result follows from the fact that Set Equivalence behaves like Equivalence Relation, in particular the symmetry clause.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 17$: Finite Sets: Theorem $17.3$
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.17$




