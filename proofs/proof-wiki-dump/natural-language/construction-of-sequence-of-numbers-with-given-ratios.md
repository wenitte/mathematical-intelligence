# 

Source: https://proofwiki.org/wiki/Construction_of_Sequence_of_Numbers_with_Given_Ratios



Theorem
In the words of Euclid:

Given as many ratios as we please in least numbers, to find numbers in continued proportion which are the least in the given ratios.
(The Elements: Book $\text{VIII}$: Proposition $4$)


Proof
Let the given ratios in least numbers be:

$a : b$, $c : d$, $e : f$
From Proposition $34$ of Book $\text{VII} $: Existence of Lowest Common Multiple, we can find:

$g = \lcm set {b, c}$
Let:

$g = r b$
$g = s c$
Then let:

$h = r a$
$k = s d$

Now either $e \divides k$ or $e \nmid k$.

First, suppose $e \divides k$.
Let $k = t e$.
Then let $l = t f$.
We have:

$h = r a$
$g = r b$
thus from Book $\text{VII}$ Definition $20$: Proportional:

$a : h = b : g$
So from Proposition $13$ of Book $\text{VII} $: Proportional Numbers are Proportional Alternately:

$a : b = h : g$
Similarly:

$c : d = g : k$
and further:

$e : f = k : l$
Thus $h, g, k, l$ are continuously proportional:

in the ratio of $a : b$
in the ratio of $c : d$
in the ratio of $e : f$.

It is necessary to prove that these are the least natural numbers with this property.
Suppose $h, g, k, l$ are not the least natural numbers in the ratios of $a : b$, $c : d$, $e : f$.
Let these numbers be $n, o, m, p$.
Then:

$a : b = n : o$
while $a$ and $b$ are least.
By Proposition $20$ of Book $\text{VII} $: Ratios of Fractions in Lowest Terms:

$b \divides o$
$c \divides o$
and so $o$ is a common multiple of $b$ and $c$.
Therefore by Proposition $35$ of Book $\text{VII} $: LCM Divides Common Multiple:

$\lcm \set {b, c} \divides o$
But $g = \lcm \set {b, c}$ from above.
Therefore $g \divides o$, the greater the less, which is impossible.
Therefore there are no numbers $n, o, m, p$ less than $h, g, k, l$ which have the properties in question.
$\Box$

Now suppose $e \nmid k$.
Let $m = \lcm \set {e, k}$.
Thus let:

$m = u k$
$n = u h$
$o = u g$
and:

$m = v e$
$p = v f$
Thus from Book $\text{VII}$ Definition $20$: Proportional:

$h : n = g : o$
From Proposition $13$ of Book $\text{VII} $: Proportional Numbers are Proportional Alternately:

$h : g = n : o$
Similarly, let:
But:

$h : g = a : b$
and so:

$a : b = n : o$
For the same reason:

$c : d = o : m$

Since:

$m = v e$
$p = v f$
from Book $\text{VII}$ Definition $20$: Proportional:

$e : m = f : p$
and so from Proposition $13$ of Book $\text{VII} $: Proportional Numbers are Proportional Alternately:

$e : f = m : p$

Therefore $n, o, m, p$ are continuously proportional:

in the ratio of $a : b$
in the ratio of $c : d$
in the ratio of $e : f$.

It is necessary to prove that these are the least natural numbers with this property.
Suppose $n, o, m, p$ are not the least natural numbers in the ratios of $a : b$, $c : d$, $e : f$.
Let these numbers be $n', o', m', p'$.
Then:

$a : b = n' : o'$
while $a$ and $b$ are least.
By Proposition $20$ of Book $\text{VII} $: Ratios of Fractions in Lowest Terms:

$b \divides o'$
$c \divides o'$
and so $o'$ is a common multiple of $b$ and $c$.
Therefore by Proposition $35$ of Book $\text{VII} $: LCM Divides Common Multiple:

$\lcm \set {b, c} \divides o'$
But $g = \lcm \set {b, c}$ from above.
Therefore $g \divides o'$, the greater the less, which is impossible.
Therefore there are no numbers $n', o', m', p'$ less than $n, o, m, p$ which have the properties in question.
$\blacksquare$


Historical Note
This proof is Proposition $4$ of Book $\text{VIII}$ of Euclid's The Elements. It needs to be pointed out that Euclid uses the term continued proportion here to mean something different from geometric sequence; the ratios $a : b$, $c : d$ and $e : f$ are not necessarily equal. 


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VIII}$. Propositions




