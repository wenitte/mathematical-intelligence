# 

Source: https://proofwiki.org/wiki/Constant_Loop_is_Loop

Theorem
Let $\struct {T, \tau}$ be a topological space.
Let $p \in T$.
Let $c_p : \closedint 0 1 \to T$ be the constant mapping defined by:

$\forall t \in \closedint 0 1 : \map {c_p} t = p$

Then $c_p$ is a loop in $T$.


Proof
From Constant Mapping is Continuous, it follows that $c_p$ is continuous.
By definition of path, it follows that $c_p$ is a path in $T$.
We have:

$\map {c_p} 0 = \map {c_p} 1 = p$

Hence, $c_p$ is a loop in $T$.
$\blacksquare$





