# 

Source: https://proofwiki.org/wiki/Continuous_iff_Mapping_at_Element_is_Supremum



Theorem
Let $\left({S, \preceq_1, \tau_1}\right)$ and $\left({T, \preceq_2, \tau_2}\right)$ be complete continuous topological lattices with Scott topologies.
Let $f: S \to T$ be a mapping.

Then $f$ is continuous if and only if

$\forall x \in S: f\left({x}\right) = \sup \left\{ {f\left({w}\right): w \in S \land w \ll x}\right\}$


Proof
Sufficient Condition
Assume that

$f$ is continuous.
By Continuous iff Directed Suprema Preserving:

$f$ is preserves directed suprema.
Thus by Directed Suprema Preserving Mapping at Element is Supremum:

$\forall x \in S: f\left({x}\right) = \sup \left\{ {f\left({w}\right): w \in S \land w \ll x}\right\}$
$\Box$

Necessary Condition
Assume that

$\forall x \in S: f\left({x}\right) = \sup \left\{ {f\left({w}\right): w \in S \land w \ll x}\right\}$
By Mapping at Element is Supremum implies Way Below iff There Exists Element that Way Below and Way Below:

$\forall x \in S, y \in T: y \ll f\left({x}\right) \iff \exists w \in S: w \ll x \land y \ll f\left({w}\right)$
Thus by Continuous iff Way Below iff There Exists Element that Way Below and Way Below:

$f$ is continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:24




