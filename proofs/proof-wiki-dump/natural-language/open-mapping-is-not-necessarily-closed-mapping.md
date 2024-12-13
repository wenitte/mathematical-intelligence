# 

Source: https://proofwiki.org/wiki/Open_Mapping_is_not_necessarily_Closed_Mapping

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: T_1 \to T_2$ be a mapping which is not a bijection.

Let $f$ be an open mapping.

Then it is not necessarily the case that $f$ is also a closed mapping.


Proof
Note that if $f$ is a bijection, the result Bijection is Open iff Closed applies.
It is to be shown that if $f$ is not a bijection, this is not necessarily the case.
This is achieved by Proof by Counterexample:

Let $\struct {\R^2, d}$ be the real number plane with the usual (Euclidean) topology.
Let $\rho: \R^2 \to \R$ be the first projection on $\R^2$ defined as:

$\forall \tuple{x, y} \in \R^2: \map \rho {x, y} = x$
From Projection on Real Euclidean Plane is Open Mapping, $\rho$ is an open mapping.
From Projection on Real Euclidean Plane is not Closed Mapping, $\rho$ is not a closed mapping.
The result is apparent.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Functions




