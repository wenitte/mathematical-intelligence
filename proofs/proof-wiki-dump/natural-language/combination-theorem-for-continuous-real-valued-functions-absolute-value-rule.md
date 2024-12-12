# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Real-Valued_Functions/Absolute_Value_Rule

Theorem
Let $\struct{S, \tau}$ be a topological space.
Let $\R$ denote the real number line.
Let $f : S \to \R$ be a continuous real-valued function.
Let $\size f : S \to \R$ denote  the absolute value of $f$, that is, $\size f$ denotes the mapping defined by:

$\forall s \in S : \map {\size f} s = \size{\map f s}$
 
Then:

$\size f$ is a continuous real-valued function


Proof
From Absolute Value of Function is Composite with Absolute Value Function:

$\size{f} = \size{\,\cdot\,} \circ f$
where:

$\size{\,\cdot\,}$ denotes the absolute value function $\size{\,\cdot\,} : \R \to \R$
$\size{\,\cdot\,} \circ f$ denotes the composite mapping of $\size{\,\cdot\,}$ with $f$

From Absolute Value Function is Continuous:

$\size{\,\cdot\,} : \R \to \R$ is continuous
From Composite of Continuous Mappings is Continuous:

$\size{\,\cdot\,} \circ f$ is continuous
The result follows.
$\blacksquare$





