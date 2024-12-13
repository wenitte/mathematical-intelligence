# 

Source: https://proofwiki.org/wiki/Particular_Point_Space_is_Non-Meager



Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.

Then $T$ is non-meager.


Proof 1
Suppose $T$ were meager.
Then it would be a countable union of subsets which are nowhere dense in $T$.

Let $H \subseteq S$.
From Closure of Open Set of Particular Point Space, the closure of $H$ is $S$.
From the definition of interior, the interior of $S$ is $S$.
So the interior of the closure of $H$ is not empty.
So $T$ can not be the union of a countable set of subsets which are nowhere dense in $T$.
Hence $T$ is not meager and so by definition must be non-meager.
$\blacksquare$


Proof 2
By definition of particular point space, any subset of $S$ which contains $p$ is open in $T$.
So $\left\{{p}\right\}$ itself is open in $T$.
That is, $p$ is an open point.
The result follows from Space with Open Point is Non-Meager.
$\blacksquare$


Proof 3
By definition of particular point space, any subset of $S$ which contains $p$ is open in $T$.

Aiming for a contradiction, suppose $T$ is meager.
By definition, $T$ is meager if and only if it is a countable union of subsets of $S$ which are nowhere dense in $T$.
At least one such nowhere dense subset $U$ of $S$ must contain $p$.

By definition, $U$ is nowhere dense in $T$ if and only if:

$U^-$ contains no open set of $T$ which is non-empty
where $U^-$ denotes the closure of $U$.

By definition of particular point space, $U$ is open in $T$.
By Closure of Open Set of Particular Point Space, $U^- = S$.
But $S$ is itself open in $T$ and non-empty, and so $U$ is not nowhere dense.

From this contradiction it follows that $T$ is non-meager
$\blacksquare$





