# 

Source: https://proofwiki.org/wiki/Archimedes%27_Limits_to_Value_of_Pi



Theorem
The value of $\pi$ lies between $3 \frac {10} {71}$ and $3 \frac 1 7$:

$3 \dfrac {10} {71} < \pi < 3 \dfrac 1 7$


Archimedes' Iterative Proof
Let $O$ be an arbitrary circle.
Let $AB$ be the diameter of $O$.
Let $Q$ be the circumference of $O$.
By the definition of $\pi$:

$\dfrac Q {AB} = \pi$
The bounds on $\pi$ that are to be demonstrated are:

$\dfrac {223} {71} < \pi < \dfrac {22} 7$



Upper bound
Let $AC$ be the tangent at $A$.
Let $\angle \theta = \angle AOC$ be $\dfrac 1 3$ of a right angle:

$\theta = 30 \degrees$
By Dissection of an Equilateral Triangle and Pythagoras's Theorem, $\triangle AOC$ has sides in the ratio:

$AC : OC : OA = 1 : 2 : \sqrt 3$
$AC$ is subtended by $\angle AOC$ which is $\dfrac 1 3$ of a right angle. 
Construct $C'$ below $A$ on the extended tangent $AC$ such that $C'C = 2 AC$.  
$C'C$ is subtended by $\angle C'OC$ which is $\dfrac 2 3$ of a right angle. 
Thus $C'C = 2 AC$ is one side of a regular hexagon.
The total perimeter $p$ of this regular hexagon is

$p = 6 \cdot CC' = 12 \cdot AC$
The ratio of the total perimeter to the diameter of the circle is:

$\dfrac p {AB} = \dfrac {12 AC} {2 AO} = 6 \cdot \dfrac {AC} {AO}$
Since $AC : OA = \dfrac 1 {\sqrt 3}$ we have:

$\dfrac p {AB} = 6 \cdot \dfrac 1 {\sqrt 3}$
If we let $AB = 1$ then $p$ is an estimate for the value of $\pi$:

$p = 6 \cdot \dfrac 1 {\sqrt 3} \approx 3\cdotp 464$
This is an initial upper bound on $\pi$.
The side-doubling calculation uses cosecants and cotangents.
The cosecant of $\theta$ is 

$\dfrac {OC} {AC} = \sqrt 3$
The cotangent of $\theta$ is 

$\dfrac {OA} {AC} = 2$
We use the following rational  approximation for $\sqrt 3$, whose decimal value is approximately $1.73205$:

$\dfrac {OA} {AC} \approx \dfrac {265} {153}$
This is about $1.73203$, slightly less than the true value.
Thus, the initial estimate for $\pi$ is

$\pi < n \dfrac {153} {265} = 6 \cdot \dfrac {153} {265} \approx 3.464$

Formulas:
Let $\phi$ be an arbitrary angle.

Lemma 1
$\ds \cot \dfrac \phi 2 = \cot \phi + \csc \phi$


Lemma 2
Let:

$\cot \phi = \dfrac p q$
Then:

$\csc \phi = \dfrac 1 q \cdot \sqrt {p^2 + q^2}$

Four rounds of a repeated calculation follow.
We give all the details for the first one.
The rest ($3$ here and $4$ in the second part) are all done in exactly the same way.

Above we had:

$\dfrac {OA} {AC} \approx \dfrac {265} {153}$
The cosecant is $2$, but using the common denominator $153$ from $\dfrac {OA} {AC}$:

$\dfrac {OC} {AC} = \dfrac {306} {153}$
Round $1$:

$\cot \theta = \dfrac {OA} {AC} > \dfrac {265} {153}$
$\csc \theta = \dfrac {OC} {AC} = \dfrac {306} {153}$
By Lemma $1$:

$\dfrac {OD} {AD} > \dfrac {571} {153}$
Using Lemma $2$:

$p^2 = 326041$
$q^2 = 23409$
$p^2 + q^2 = 349450$
So then:

$\dfrac { {OD}^2} { {AD}^2} > \dfrac {349450} {23409}$
with the approximated square root as:

$\dfrac {OD} {DA} > \dfrac {591 \tfrac 1 8} {153}$
Note that this value is lower than that given by a calculation of the square root in decimal, $591.143$.

For the other rounds:
Let $OE$ bisect $\angle AOD$, meeting $AD$ in $E$:

$\dfrac {OA} {AE} > \dfrac {1162 \tfrac 1 8} {153}$
$\dfrac {OE} {AE} > \dfrac {1172 \tfrac 1 8} {153}$
Let $OF$ bisect $\angle AOE$, meeting $AE$ in $F$:

$\dfrac {OA} {AF} > \dfrac {2334 \tfrac 1 4} {153}$
$\dfrac {OF} {AF} > \dfrac {2339 \tfrac 1 4} {153}$
Let $OG$ bisect $\angle AOF$, meeting $AF$ in $G$:

$\dfrac {OA} {AG} > \dfrac {4673 \tfrac 1 2} {153}$
$\angle AOC$, which is $\dfrac 1 3$ of a right angle, has been bisected four times.  
It follows that:

$\angle AOG = \dfrac 1 {48}$ of a right angle
Make $\angle AOH = \angle AOG$  Then:

$\angle GOH = \dfrac 1 {24}$ of a right angle
Thus $GH$ is one side of a regular polygon of 96 sides.

Since:

$\dfrac {OA} {AG} > \dfrac {4673 \tfrac 1 2} {153}$
while:

$AB = 2 OA$
and:

$GH = 2 AG$
It follows that:

$\dfrac {AB} p > \paren {\dfrac {4673 \tfrac 1 2} {153} } \cdot \dfrac 1 {96}$
$\dfrac {AB} p > \dfrac {4673 \tfrac 1 2} {14688}$
But 

$\dfrac p {AB} = \pi$
so:

$\pi < \dfrac {14688} {4673 \tfrac 1 2}$
Thus:

$\dfrac {14688} {4673 \frac 1 2} = 3 + \dfrac {667 \frac 1 2} {4673 \frac 1 2} < 3 \dfrac 1 7$
This is an upper bound on $\pi$.


Lower bound

Let $\triangle ABC$ be a right triangle inscribed in $O$.
Let $\angle \theta = \angle BAC$ be $\dfrac 1 3$ of a right angle:

$\theta = 30 \degrees$
From above, $\triangle ABC$ has sides in the ratio:

$BC = 1$
$AB = 2$
$AC = \sqrt 3$

$BC$ subtends a central angle of $2 \theta$ which is two-thirds of a right angle, so it corresponds to one side of an inscribed hexagon.
Thus total perimeter $p$ of the hexagon is

$p = 6 \cdot BC = 6$
Since $AB = 2$, the total circumference of the circle is $2 \pi$ and thus, the initial lower bound for $\pi$ is:

$\pi > \dfrac p {AB} = 3$
We use the following rational  approximation for $\sqrt 3$:

$\dfrac {AC} {CB} \approx \dfrac {1351} {780}$
This value is about $1.7320513$, which is slightly high.
From above we have that cotangent of $\theta$ is:

$\dfrac {AC} {CB} < \dfrac {1351} {780}$
The cosecant of $\theta$ is $2$ so:

$\dfrac {AB} {BC} = \dfrac {1560} {780}$

Four rounds of a repeated calculation follow:
Round $1$:

$\dfrac {AD} {DB} < \dfrac {2911} {780}$
$\dfrac {AB} {BD} < \dfrac {3013 \tfrac 3 4} {780}$
Round $2$:

$\dfrac {AE} {EB} < \dfrac {5924 \tfrac 3 4} {780}$

We can factor this.
Multiply top and bottom by $\dfrac 4 {13}$:

$\dfrac {AE} {EB} < \dfrac {1823} {240}$
$\dfrac {AB} {BE} < \dfrac {1838 \tfrac 9 {11} } {240}$

Round $3$:

$\dfrac {AF} {BF} < \dfrac {3661 \tfrac 9 {11} } {240}$
We can also factor this.
Multiply top and bottom by $\dfrac {11} {40}$:

$\dfrac {AF} {BF} < \dfrac {1007} {66}$
$\dfrac {AB} {BF} < \dfrac {1009 \tfrac 1 6} {66}$
Round $4$:

$\dfrac {AG} {BG} < \dfrac {2016 \tfrac 1 6} {66}$
$\dfrac {AB} {BG} < \dfrac {2017 \tfrac 1 4} {66}$
whence:

$\dfrac {BG} {AB} > \dfrac {66} {2017 \tfrac 1 4}$
$\angle BAG$ is the result of the fourth bisection of $\angle BAC$, so:

$\angle BAG = \dfrac 1 {48}$ of a right angle
Thus by the Inscribed Angle Theorem the angle subtended by $BG$ at the center is $\dfrac 1 {24}$ of a right angle.
It follows that:

$\dfrac p {AB} > \paren {\dfrac {66} {2017 \tfrac 1 4} } \cdot 96$
$\dfrac p {AB} > \dfrac {6336} {2017 \tfrac 1 4}$
Because:

$\pi = \dfrac p {AB}$
we have:

$\pi > \dfrac {6336} {2017 \tfrac 1 4} > 3 \tfrac {10} {71}$
This is a lower bound on $\pi$.

Since:

$3 \tfrac {10} {71} = \dfrac {223} {71}$
combining the two results we have:

$3 \tfrac {10} {71} < \pi < 3 \tfrac 1 7$
that is:

$\dfrac {223} {71} < \pi < \dfrac {22} 7$
In decimal:

$3.1408 < \pi < 3.1428$
$\blacksquare$


Trigonometric Proof
Let $O$ be a circle with diameter $AB = 1$
Let $Q$ be the circumference of $O$.
By the definition of $\pi$:

$\dfrac Q {AB} = \pi$
Since $AB = 1$ then $Q$ is exactly $\pi$.

Using regular polygons inscribed and circumscribed about the circle $O$, we aim to demonstrate that the bounds on $\pi$ are:

$\dfrac {223} {71} < \pi < \dfrac {22} {7}$


Lemma 1
$\ds \cot \dfrac \phi 2 = \cot \phi + \csc \phi$


Lemma 2
Let:

$\cot \phi = \dfrac p q$
Then:

$\csc \phi = \dfrac 1 q \cdot \sqrt {p^2 + q^2}$


Lemma 3
$\pi < \dfrac {22} 7$


Lemma 4
$\pi > \dfrac {223} {71}$

Combining the two results from the fifth iteration of Lemma $3$ and Lemma $4$, we have:














\(\ds 3 \tfrac {10} {71}\)

\(<\)

\(\, \ds \pi \, \)

\(\, \ds < \, \)



\(\ds 3 \tfrac 1 7\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {223} {71}\)

\(<\)

\(\, \ds \pi \, \)

\(\, \ds < \, \)



\(\ds \dfrac {22} 7\)









Expressing this in decimal:

$3.1408 < \pi < 3.1429$
$\blacksquare$


Historical Note
Archimedes demonstrated the limits to the value of $\pi$ in his Measurement of a Circle. 
He does not say where the two estimates $\dfrac {265} {153}$ and $\dfrac {1351} {780}$ for $\sqrt 3$ come from.
They can be easily derived from the continued fraction representation, namely, $\sqbrk {1, \sequence {1, 2} }$, but whether he knew this, or had another method, is unclear.


Sources
1897: T.L. Heath: The Works of Archimedes
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{II}$: Modern Minds in Ancient Bodies




