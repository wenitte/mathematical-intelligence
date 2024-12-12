# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_13


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{X, \tau}$ be a topological space.

Let every open cover of $T$ be even.

Let $\tau_{X \times X}$ denote the product topology on the cartesian product $X \times X$.

Let $V$ be a neighborhood of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct {X \times X, \tau_{X \times X} }$.

Then:

there exists a sequence $\sequence{V_n}_{n \in \N}$ of neighborhoods of the diagonal $\Delta_X$ in $\struct {X \times X, \tau_{X \times X} }$:
$V_0 = V$
$\forall n \in \N_{> 0} : V_n$ is symmetric as a relation on $X \times X$
$\forall n \in \N_{> 0}$ the composite relation $V_n \circ V_n$ is a subset of $V_{n - 1}$, that is, $V_n \circ V_n \subseteq V_{n - 1}$
Proof
Lemma 20
Let $N$ be a neighborhood of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct {X \times X, \tau_{X \times X} }$.

Then there exists an open neighborhood $W$ of the diagonal $\Delta_X$ in $\struct {X \times X, \tau_{X \times X} }$:

$W$ is symmetric as a relation on $X \times X$, that is, $W = W^{-1}$
the composite relation $W \circ W$ is a subset of $N$, that is, $W \circ W \subseteq N$
$\Box$

The sequence $\sequence{V_n}_{n \in \N}$ is now constructed using the Principle of Recursive Definition and Zermelo's Well-Ordering Theorem.

Let:

$\NN = \leftset{U \subseteq X \times X : U }$ is a neighborhood of the diagonal $\Delta_X$ in $\struct {X \times X, \tau_{X \times X} } \rightset{}$

From Zermelo's Well-Ordering Theorem, let:

$\preccurlyeq$ be a well-ordering on $\NN$

Let $g: \NN \to \NN$ be the mapping defined by:

$\forall U \in \NN : \map g U = \min \leftset{ V \in \NN : V \circ V \subseteq U}$ and $V$ is symmetric $\rightset{}$

From Lemma 20:

$\forall U \in \NN : \leftset{ V \in \NN : V \circ V \subseteq U}$ and $V$ is symmetric $\rightset{} \ne \O$

By definition of well-ordering:

$g$ is well-defined

From Principle of Recursive Definition, there exists exactly one sequence $\sequence{V_n}_{n \in \N}$ of neighborhoods of the diagonal $\Delta_X$ in $\struct {X \times X, \tau_{X \times X} }$:

$V_0 = V$
$\forall n \in \N_{> 0} : V_n$ is symmetric as a relation on $X \times X$
$\forall n \in \N_{> 0}$ the composite relation $V_n \circ V_n$ is a subset of $V_{n - 1}$, that is, $V_n \circ V_n \subseteq V_{n - 1}$
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.





