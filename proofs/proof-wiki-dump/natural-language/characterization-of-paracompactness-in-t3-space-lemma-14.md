# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_14


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $X$ be a set.

Let $X \times X$ denote the cartesian product of $X$ with itself.

Let $\sequence{V_n}_{n \in \N}$ be a sequence of subsets of $X \times X$ containing the diagonal $\Delta_X$ of $X \times X$:

$\forall n \in \N_{> 0}$ the composite relation $V_n \circ V_n$ is a subset of $V_{n - 1}$, that is, $V_n \circ V_n \subseteq V_{n - 1}$

For all $n \in \N_{> 0}$, let:

$U_n = V_n \circ V_{n - 1}, \circ \cdots \circ V_1$

Then:

$\forall n \in \N_{>0}: U_n \subseteq V_0$
Proof
Proof: $V_n \subseteq V_{n - 1}$
We have:










\(\ds \forall n \in \N_{> 0}: \, \)



\(\ds \tuple{x, y} \in V_n\)

\(\leadsto\)







\(\ds \tuple{x, y}, \tuple{y, y} \in V_n\)





as $\Delta_X \subseteq V_n$














\(\ds \)

\(\leadsto\)







\(\ds \tuple{x, y} \in V_n \circ V_n\)





Definition of Composite Relation








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N_{> 0}: \, \)



\(\ds V_n\)

\(\subseteq\)







\(\ds V_n \circ V_n\)





Definition of Subset










\(\ds \forall n \in \N_{> 0}: \, \)



\(\ds V_n \circ V_n\)

\(\subseteq\)







\(\ds V_{n - 1}\)





by hypothesis




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N_{> 0}: \, \)



\(\ds V_n\)

\(\subseteq\)







\(\ds V_{n - 1}\)





From Subset Relation is Transitive



$\Box$


Proof: $U_n \subseteq V_{n - 1} \circ U_{n - 1}$
We have:










\(\ds \forall n \in \N_{> 0}: \, \)



\(\ds V_n\)

\(\subseteq\)







\(\ds V_{n - 1}\)





$(1)$ above








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N_{> 0}: \, \)



\(\ds V_n \circ U_{n - 1}\)

\(\subseteq\)







\(\ds V_{n - 1} \circ U_{n - 1}\)





Composition of Relations Preserves Subsets










\(\ds \forall n > 1: \, \)



\(\ds U_n\)

\(=\)







\(\ds V_n \circ U_{n - 1}\)





Definition of $U_n$




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N_{> 0}: \, \)



\(\ds U_n\)

\(\subseteq\)







\(\ds V_{n - 1} \circ U_{n - 1}\)





Subset Relation is Transitive



$\Box$


Proof: $V_n \circ U_n \subseteq V_0$
Proceeds by induction on $n$.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$V_n \circ U_n \subseteq V_0$


Basis for the Induction
$\map P 1$ is the case:














\(\ds V_1 \circ U_1\)

\(=\)







\(\ds V_1 \circ V_1\)





Definition of $U_1$














\(\ds \)

\(\subseteq\)







\(\ds V_0\)





by hypothesis



and $\map P 1$ is seen to hold.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P n$ is true, where $n > 0$, then it logically follows that $\map P {n + 1}$ is true.

So this is our induction hypothesis:

$V_n \circ U_n \subseteq V_0$

Then we need to show:

$V_{n + 1} \circ U_{n + 1} \subseteq V_0$


Induction Step
This is our induction step:














\(\ds V_{n + 1} \circ U_{n + 1}\)

\(=\)







\(\ds V_{n + 1} \circ \paren {V_{n + 1} \circ U_n}\)




















\(\ds \)

\(=\)







\(\ds \paren{V_{n + 1} \circ V_{n + 1} } \circ U_n\)





Composition of Relations is Associative














\(\ds \)

\(\subseteq\)







\(\ds V_n \circ U_n\)





by hypothesis and Composition of Relations Preserves Subsets














\(\ds \)

\(\subseteq\)







\(\ds V_0\)





Induction Hypothesis




So $\map P n \implies \map P {n + 1}$ and by the Principle of Mathematical Induction:

$(3):\quad\forall n \in \N_{> 0} : V_n \circ U_n \subseteq V_0$
$\Box$


Proof: $U_n \subseteq V_0$
We have:










\(\ds \forall n \in \N_{> 0}: \, \)



\(\ds U_{n + 1}\)

\(\subseteq\)







\(\ds V_n \circ U_n\)





$(2)$ above










\(\ds \forall n \in \N_{> 0}: \, \)



\(\ds V_n \circ U_n\)

\(\subseteq\)







\(\ds V_0\)





$(3)$ above








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N_{> 1}: \, \)



\(\ds U_n\)

\(\subseteq\)







\(\ds V_0\)





Subset Relation is Transitive














\(\ds U_1\)

\(=\)







\(\ds V_1\)





Definition of $U_1$














\(\ds \)

\(\subseteq\)







\(\ds V_0\)





$(1)$ above








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N_{> 0}: \, \)



\(\ds U_n\)

\(\subseteq\)







\(\ds V_0\)









$\blacksquare$





