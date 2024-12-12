# 

Source: https://proofwiki.org/wiki/Between_Two_Sets_Exists_Injection_or_Surjection

Theorem
Let $S$ and $T$ be sets.

Then either or both of the following cases hold:

$(1):$ There exists a mapping $f: S \to T$ such that $f$ is an injection
$(2):$ There exists a mapping $f: S \to T$ such that $f$ is a surjection.


Proof
From Zermelo's Theorem, exactly one of the following cases holds:

$(1): \quad S \le T$, that is, $T$ dominates $S$
$(2): \quad S \equiv T$, that is, $T$ is equivalent to $S$
$(3): \quad S \ge T$, that is, $S$ dominates $T$.

Suppose $(1)$ holds, that is, $T$ dominates $S$.
By definition, there exists an injection from $S$ to $T$.
Hence in this case the result holds.
$\Box$

Suppose $(2)$ holds, that is, $T$ is equivalent to $S$.
By definition, there then exists a bijection from $S$ to $T$.
A bijection is, by definition, a mapping which is both an injection and a surjection.
Hence in this case the result holds.
$\Box$

Suppose $(3)$ holds, that is, $S$ dominates $T$.
By definition, there exists an injection from $S$ to $T$.
By Injection has Surjective Left Inverse Mapping, $f$ has a left inverse $g: T \to S$ which is surjective.
Hence in this case the result holds.
$\Box$

All cases have been shown to lead to the same conclusion, that is, that there exists either an injection or a surjection or both between $S$ and $T$.
Hence the result, by Proof by Cases.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Zermelo's Theorem (Set Theory).
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.





