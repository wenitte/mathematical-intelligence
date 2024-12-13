# 

Source: https://proofwiki.org/wiki/Number_of_Regions_in_Plane_Defined_by_Given_Number_of_Lines



Theorem
The maximum number $L_n$ of regions in the plane that can be defined by $n$ straight lines in the plane is:

$L_n = \dfrac {n \paren {n + 1} } 2 + 1$
This sequence is A000124 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Setting up a Recurrence Rule
First we consider the plane with no lines at all.
This has one region, so $L_0 = 1$.
Now when we have one line, we divide the plane into two regions, so $L_1 = 2$.

Now consider the $n$th line.
This increase the number of regions by $k$ iff it splits $k$ of the old regions.
It can split $k$ of the old regions if and only if it hits the existing lines on the plane in $k-1$ places.
Two straight lines can intersect in at most one point.
So the new line can intersect the $n - 1$ old ones in at most $n - 1$ different points.
Therefore $k \le n$.
So we see that $L_n \le L_{n - 1} + n$.

Now, it is always possible to place the $n$th line so that:

$(1): \quad$ It is not parallel to any of the others, and therefore intersects all the other $n - 1$ lines
$(2): \quad$ It does not go through any of the existing intersection points (so intersects them all in different places).
Thus we see that $L_n \ge L_{n - 1} + n$.

Hence the recurrence:

$L_n = L_{n - 1} + n$


Solution of Recurrence
Using induction, we show that:

$L_n = \dfrac {n \paren {n + 1} } 2 + 1$
The base case is straightforward:

$L_0 = 1 = \dfrac {0 \paren {0 + 1} } 2 + 1$
$L_1 = 2 = \dfrac {1 \paren {1 + 1} } 2 + 1$

Now assume the induction hypothesis:

$L_k = \dfrac {k \paren {k + 1} } 2 + 1$
and try to show:

$L_{k + 1} = \dfrac {\paren {k + 1} \paren {k + 2} } 2 + 1$

Hence the induction step:














\(\ds L_{k + 1}\)

\(=\)







\(\ds L_k + k + 1\)




















\(\ds \)

\(=\)







\(\ds \frac {k \paren {k + 1} } 2 + 1 + k + 1\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1} \paren {k + 2} } 2 + 1\)





after algebra



Hence the result by induction.
$\blacksquare$


Examples
Number of Regions in Plane Defined by $6$ of Lines
With $6$ lines, the plane can be divided into a maximum of $22$ regions:





Historical Note
This result was first published in $1826$ by Jakob Steiner, in one of the first issues of Journal für die reine und angewandte Mathematik.


Sources
1826: Jakob Steiner: Einige Gesetze über die Theilungder Ebene und des Raumes (J. reine angew. Math. Vol. 1: pp. 349 – 364)
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $22$
1994: Ronald L. Graham, Donald E. Knuth and Oren Patashnik: Concrete Mathematics: A Foundation for Computer Science (2nd ed.) $\S 1.2$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $22$




