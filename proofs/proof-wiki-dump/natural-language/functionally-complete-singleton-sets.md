# 

Source: https://proofwiki.org/wiki/Functionally_Complete_Singleton_Sets

Theorem
The only binary logical connectives that form singleton sets which are functionally complete are NAND and NOR.


Proof
Let $\uparrow$ and $\downarrow$ denote NAND and NOR respectively.
From:

NAND is Functionally Complete
and

NOR is Functionally Complete
the singleton sets $\left\{{\uparrow}\right\}$ and $\left\{{\downarrow}\right\}$ are functionally complete.

Suppose $\circ$ is a binary logical connective such that $\left\{{\circ}\right\}$ is a functionally complete set.
The unary logical connective $\neg$ has to be equivalent to some formula:

$\cdots \circ \left({p \circ p}\right) \circ \cdots$
Suppose some interpretation $v$ assigns $T$ to $p$.
Then $v \left({\neg p}\right) = F$
So:

$v \left({\cdots \circ \left({p \circ p}\right) \circ \cdots}\right) = F$
So it has to be true that $T \circ T = F$, otherwise:

$v \left({\cdots \circ \left({T \circ T}\right) \circ \cdots}\right) = v \left({\cdots \circ \left({T}\right) \circ \cdots}\right) = T$
Similarly:

$F \circ F = T$

Now consider $T \circ F$ and $F \circ T$.
Suppose $T \circ F = F$.
If $F \circ T = T$, then we have the function defined by this truth table:




$v \left({p}\right)$

$v \left({q}\right)$

$v \left({p \circ q}\right)$


$F$
$F$
$T$


$F$
$T$
$T$


$T$
$F$
$F$


$T$
$T$
$F$

which is $\neg p$, and hence only negation would be definable.
So if $T \circ F = F$ we need $F \circ T = F$.
This gives the truth table for the NOR function:




$v \left({p}\right)$

$v \left({q}\right)$

$v \left({p \circ q}\right)$


$F$
$F$
$T$


$F$
$T$
$F$


$T$
$F$
$F$


$T$
$T$
$F$

... which we have seen is functionally complete.

Similarly, Suppose $T \circ F = T$.
If $F \circ T = F$, then we have the function defined by this truth table:




$v \left({p}\right)$

$v \left({q}\right)$

$v \left({p \circ q}\right)$


$F$
$F$
$T$


$F$
$T$
$F$


$T$
$F$
$T$


$T$
$T$
$F$

which is $\neg q$, and hence only negation would be definable.
So if $T \circ F = T$ we need $F \circ T = T$.
This gives the truth table for the NAND function:




$v \left({p}\right)$

$v \left({q}\right)$

$v \left({p \circ q}\right)$


$F$
$F$
$T$


$F$
$T$
$T$


$T$
$F$
$T$


$T$
$T$
$F$

... which we have seen is functionally complete.

Thus it follows that there can be no functionally complete binary logical connectives apart from NAND and NOR.
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.4.2$: Theorem $2.37$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.10$




