# 

Source: https://proofwiki.org/wiki/Maximum_Rule_for_Continuous_Functions

Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $f, g: S \to \R$ be continuous real-valued functions.
Let $\max \set {f, g}: S \to \R$ denote the pointwise maximum of $f$ and $g$.

Then:

$\max \set {f, g}$ is continuous.


Proof
From Sum Less Minimum is Maximum:

$\forall x \in S : \max \set {\map f x, \map g x} = \map f x + \map g x - \min \set {\map f x, \map g x}$
Thus: 

$\max \set {f, g} = f + g - \min \set{f, g}$

From Minimum Rule for Continuous Functions:

$\min \set {f, g}$ is continuous
From Multiple Rule for Continuous Mappings into Topological Ring:

$-\min \set {f, g}$ is continuous
From Sum Rule for Continuous Mappings into Topological Ring:

$f + g - \min \set {f, g}$ is continuous

Thus:

$\max \set {f, g}$ is continuous
$\blacksquare$


Also see
Minimum Rule for Continuous Functions




