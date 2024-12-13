# 

Source: https://proofwiki.org/wiki/Obtuse_Triangle_Divided_into_Acute_Triangles



Theorem
Let $T$ be an obtuse triangle.
Let $T$ be dissected into $n$ acute triangles.

Then $n \ge 7$.


Construction
Let $\triangle ABC$ be an obtuse triangle such that:

$\angle ACB > 90^\circ$
$\angle ACB - \angle CAB < 90^\circ$
$\angle ACB - \angle CBA < 90^\circ$
Let $D$ be the incenter of $\triangle ABC$.
Let a circle be constructed whose center is $D$ and whose radius is $CD$.
The dissection into acute triangles is then performed as follows:




This gives a dissection into $7$ pieces.

If the conditions on $A$ and $B$ are not satisfied, then it is possible to draw a line from $C$ to $AB$ to dissect $\triangle ABC$ into an acute triangle and an obtuse triangle which does satisfy the conditions.
This gives a dissection into $8$ pieces.


Proof
As $D$ is equidistant from $AC$, $CB$ and $BA$, it follows that $\angle CDH = \angle CDE = \angle FDG$.
As $CD = DE = DF = DG = DH$, it follows that each of $\triangle CDE$, $\triangle CDH$ and $\triangle FDG$ are isosceles.
From Triangle Side-Angle-Side Congruence, $\triangle CDE$, $\triangle CDH$ and $\triangle FDG$ are congruent.
Hence it follows that:

$\angle ECD + \angle CED = \angle ACB$
and that both $\angle ECD$ and $\angle CED$ are acute.
As $\angle ACB$ is obtuse, it follows that $\angle ECD + \angle CED$ together are greater than a right angle.
From Sum of Angles of Triangle equals Two Right Angles, it follows that $\angle CDE$ is acute.
Thus $\triangle CDE$, $\triangle CDH$ and $\triangle FDG$ are all congruent acute triangles.

As $\angle ACB$ is obtuse, it follows that $\angle CAB$ and $\angle CBA$ are both acute.
As $AE = AF$ and $BG = BH$, it follows that $\triangle EAF$ and $\triangle GBH$ are both isosceles.
As $\angle AEF = \angle AFE$ and $\angle AEF + \angle AFE$ are less than $2$ right angles, each of $\angle AEF$ and $\angle AFE$ are acute.
Thus $\triangle EAF$ is an acute triangle.
By the same argument, $\triangle GBH$ is also an acute triangle.

Thus it has been established that for obtuse $\angle ACB$, five of the 
triangles into which $\triangle ABC$ has been dissected are acute.
The conditions under which the remaining triangles $\triangle DEF$ and $\triangle DGH$ are also acute triangle are still to be established.

By the same argument as for $\triangle CDE$ and $\triangle CDH$, we also have that $\triangle DEF$ and $\triangle DGH$ are isosceles.
By the same argument as for $\triangle EAF$ and $\triangle GBH$, it follows that $\angle DEF$ and $\angle DFE$ are both acute, as are $\angle DHG$ and $\angle DGH$.

We have that $\angle CED + \angle DEF + \angle AEF$ form $2$ right angles.
From Sum of Angles of Triangle equals Two Right Angles, and the fact that $\triangle AEF$ and $\triangle DEF$ are both isosceles:

$2 \angle AEF = 180^\circ - \angle CAB$
$2 \angle DEF = 180^\circ - \angle EDF$
and so:

$2 \angle CED + \paren {180^\circ - \angle EDF} + \paren {180^\circ - \angle CAB} = 360^\circ$
which, when simplified, gives:

$\angle EDF = 2 \angle CED - \angle CAB$
But:

$2 \angle CED = \angle ACB$
as established above.
Hence $\triangle EDF$ is acute exactly when:

$\angle ACB - \angle CAB < 90^\circ$
Similarly, $\triangle CDH$ is acute exactly when:

$\angle ACB - \angle CBA < 90^\circ$

Thus it has been established that when:

$\angle ACB > 90^\circ$
$\angle ACB - \angle CAB < 90^\circ$
$\angle ACB - \angle CBA < 90^\circ$
$\triangle ABC$ can be dissected into $7$ of acute triangles.
$\Box$

As seen above, when $\angle ACB - \angle CAB \ge 90^\circ$, or $\angle ACB - \angle CBA \ge 90^\circ$, the above construction does not work.
However, it will be demonstrated that there exists an $8$ piece dissection of such a triangle.

Let $\triangle ABC$ be an obtuse triangle such that either $\angle ACB - \angle CAB > 90^\circ$ or $\angle ACB - \angle CBA > 90^\circ$.
Without loss of generality, suppose $\angle ACB - \angle CAB > 90^\circ$ and that $CAB \le CBA$.
Let $P$ be constructed on $AB$ such that $AP = AC$.
Then $\triangle ACP$ is an isosceles triangle with an acute apex.
Thus from Isosceles Triangle with Acute Apex is Acute Triangle, $\triangle ACP$ is an acute triangle.




We have that:

$\angle CPB + \angle CPA = 180^\circ$
and:

$2 \angle CPA + \angle CAB = 180^\circ$
Thus:

$\angle CPB = 90^\circ + \dfrac {\angle CAB} 2$













\(\ds \angle CPB\)

\(=\)







\(\ds 90^\circ + \dfrac {\angle CAB} 2\)














\(\ds \leadsto \ \ \)





\(\ds \angle CPB - \angle CBA\)

\(=\)







\(\ds 90^\circ + \dfrac {\angle CAB} 2 - \angle CBA\)




















\(\ds \)

\(<\)







\(\ds 90^\circ\)





as $\angle CBA \ge CAB$




Also:














\(\ds \angle PCB + \angle CPB + \angle CBA\)

\(=\)







\(\ds 180^\circ\)














\(\ds \leadsto \ \ \)





\(\ds \angle PCB\)

\(=\)







\(\ds 90^\circ - \dfrac {\angle CAB} 2 - \angle CBA\)














\(\ds \leadsto \ \ \)





\(\ds \angle CPB - \angle PCB\)

\(=\)







\(\ds 90^\circ + \dfrac {\angle CAB} 2 - \paren {90^\circ - \dfrac {\angle CAB} 2 - \angle CBA}\)




















\(\ds \)

\(=\)







\(\ds \angle CAB + \angle CBA\)




















\(\ds \)

\(<\)







\(\ds 90^\circ\)





as $\angle ABC + \angle BAC + \angle ACB = 180^\circ$ and $\angle ACB > 90^\circ$




Thus we have that $\triangle CPB$ fulfils the criteria to have a dissected into $7$ acute triangles.
Together with acute triangle $\triangle ACP$, it is seen that $\triangle ABC$ has a dissected into $8$ acute triangles.
$\Box$

It remains to be shown that at least $7$ pieces are always needed.
Let $\XX$ be a minimal dissection of $\triangle ABC$ into $n$ acute triangles.

Suppose one of those dissecting lines be drawn from any vertex of $\triangle ABC$ to the opposite side of $\triangle ABC$.
Then this divides $\triangle ABC$ into two triangles at least one of which is obtuse.
This obtuse triangle will itself require $n$ pieces.
Hence $\triangle ABC$ needs at least $n + 1$ pieces, contradicting its minimal nature.

Suppose one of its dissecting lines be drawn from $AC$ to $BC$.
This cuts off an obtuse triangle with $\angle ACB$ as a vertex.
This again needs $n$ pieces.
Hence $\triangle ABC$ needs at least $n + 1$ pieces, contradicting its minimal nature.

Let lines be drawn from $D$ on $AC$ and $E$ on $BC$ to a single point $P$ on $AB$.
Then either or both of $\triangle ADP$ or $\triangle BEP$ are themselves obtuse triangles.
This again needs $n$ pieces.
Hence $\triangle ABC$ needs at least $n + 1$ pieces, contradicting its minimal nature.

The remaining option is for two lines from $AC$ to $AB$ and $BC$ to $AB$ at two separate points such that the parts cut off are acute triangles, leaving a pentagonal shape in the middle.
From Dissection of Pentagon into 5 Acute Triangles, this needs at least $5$ acute triangles to dissect it.
Hence the result.
$\blacksquare$


Sources
1961: Verner E. Hoggatt, Jr and Russ Denman: Acute Isosceles Dissection of an Obtuse Triangle (Amer. Math. Monthly Vol. 68: pp. 912 – 913)  www.jstor.org/stable/2311704
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $7$
1991: David Wells: Curious and Interesting Geometry ... (previous) ... (next): acute-angled triangle dissections
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $7$




