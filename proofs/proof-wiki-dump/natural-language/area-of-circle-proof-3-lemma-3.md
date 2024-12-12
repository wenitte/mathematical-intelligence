# 

Source: https://proofwiki.org/wiki/Area_of_Circle/Proof_3/Lemma_3

Lemma for Area of Circle: Proof 3

Construct a circle with radius $r$ and circumference $c$, whose area is denoted by $C$.
Construct a triangle with height $r$ and base $c$, whose area is denoted by $T$.
Then:

$T \le C$


Proof

Aiming for a contradiction, suppose $T > C$.
It should be possible to construct a regular polygon with area $P$, where $C < P < T$.
From Area of Polygon by Inradius and Perimeter:

$P = \dfrac {h q} 2$
where:

$q$ is the perimeter of the regular polygon
$h$ is the inradius of the regular polygon
$P$ is the area.
as each triangle has:

base $B = \dfrac q n$
area $A = \dfrac {h q} {2 n}$
And with $n$ triangles we get:

$P = \dfrac {h q} 2$

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Better to link to the result which demonstrates this. The redlink Area of Polygon by Inradius and Perimeter opens up the result which is to be linked to. Note that first it needs to be established that a polygon can indeed be divided into $n$ congruent isosceles triangles, as far as I know this has not yet been done.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
On one hand:

$P < T \implies \dfrac {h q} 2 < \dfrac {r c} 2$
On the other hand:

$0 < h = r \land 0 < c < q \implies \dfrac {h q} 2 > \dfrac {r c} 2$
Hence a contradiction is obtained.
Hence:

$\neg T > C$.
and so:

$T \le C$.
$\blacksquare$





