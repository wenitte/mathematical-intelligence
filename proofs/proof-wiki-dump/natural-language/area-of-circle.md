# 

Source: https://proofwiki.org/wiki/Area_of_Circle



Theorem
The area $A$ of a circle is given by:

$A = \pi r^2$
where $r$ is the radius of the circle.


Proof 1
From Equation of Circle:

$x^2 + y^2 = r^2$
Thus $y = \pm \sqrt {r^2 - x^2}$.

It follows that from the geometric interpretation of the definite integral:














\(\ds A\)

\(=\)







\(\ds \int_{-r}^r \paren {\sqrt {r^2 - x^2} - \paren {-\sqrt {r^2 - x^2} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-r}^r 2 \sqrt {r^2 - x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-r}^r 2 r \sqrt {1 - \frac {x^2} {r^2} } \rd x\)









Let $x = r \sin \theta$ (note that we can do this because $-r \le x \le r$).
Thus $\theta = \map \arcsin {\dfrac x r}$ and $\rd x = r \cos \theta \rd \theta$.














\(\ds A\)

\(=\)







\(\ds \int_{\map \arcsin {\frac {-r} r} }^{\map \arcsin {\frac r r} } 2 r^2 \sqrt {1 - \frac {\paren {r \sin \theta}^2} {r^2} } \cos \theta \rd \theta\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int_{-\frac \pi 2}^{\frac \pi 2} 2 r^2 \sqrt {1 - \sin^2 \theta} \cos \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \int_{-\frac \pi 2}^{\frac \pi 2} 2 r^2 \sqrt {\cos^2 \theta} \cos \theta \rd \theta\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds r^2 \int_{-\frac \pi 2}^{\frac \pi 2} 2 \cos^2 \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds r^2 \int_{-\frac \pi 2}^{\frac \pi 2} \paren {1 + \map \cos {2 \theta} } \rd \theta\)





Double Angle Formula for Cosine: Corollary $1$














\(\ds \)

\(=\)







\(\ds r^2 \intlimits {\theta + \frac 1 2 \map \sin {2 \theta} } {-\frac \pi 2} {\frac \pi 2}\)





from Definite Integral of Constant and Primitive of Cosine Function














\(\ds \)

\(=\)







\(\ds r^2 \paren {\frac \pi 2 + \frac 1 2 \map \sin {2 \cdot \frac {-\pi} 2} - \frac {-\pi} 2 - \frac 1 2 \map \sin {2 \cdot \frac \pi 2} }\)




















\(\ds \)

\(=\)







\(\ds r^2 \paren {2 \cdot \frac \pi 2 + 2 \cdot \frac 1 2 \cdot 0}\)




















\(\ds \)

\(=\)







\(\ds \pi r^2\)









$\blacksquare$


Proof 2
Proof by shell integration:
The circle can be divided into a set of infinitesimally thin rings, each of which has area $2 \pi t \rd t$, since the ring has length $2 \pi t$ and thickness $\rd t$.


This article contains statements that are justified by handwavery.In particular: The fact that the above is a valid approximation needs to be established.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.













\(\ds A\)

\(=\)







\(\ds \int_0^r 2 \pi t \rd t\)





Perimeter of Circle














\(\ds \)

\(=\)







\(\ds \bigintlimits {\pi t^2} 0 r\)




















\(\ds \)

\(=\)







\(\ds \pi r^2\)









$\blacksquare$


Proof 3

Construct a circle with radius $r$ and circumference $c$, whose area is denoted by $C$.
Construct a triangle with height $r$ and base $c$, whose area is denoted by $T$.


Lemma $1$
$T = \pi r^2$
$\Box$


Lemma $2$
$T \ge C$
$\Box$


Lemma $3$
$T \le C$
$\Box$


Final Proof
From Lemma $2$:

$T \ge C$
From Lemma $3$:

$T \le C$
Therefore:

$T \mathop = C$
and so from Lemma $1$:

$C \mathop = T \mathop = \pi r^2$
$\blacksquare$


Proof 4
Expressing the area in polar coordinates:














\(\ds \iint \rd A\)

\(=\)







\(\ds \int_0^r \int_0^{2 \pi} t \rd t \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\int_0^r t \theta} 0 {2 \pi} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^r 2 \pi t \rd t\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \paren {\intlimits {\frac 1 2 t^2} 0 r}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi \paren {\frac 1 2 r^2}\)




















\(\ds \)

\(=\)







\(\ds \pi r^2\)









$\blacksquare$


Kepler's Proof
Let the circle of radius $r$ be divided into many sectors:


If they are made small enough, they can be approximated to triangles whose heights are all $r$.
Let the bases of these triangles be denoted:

$b_1, b_2, b_3, \ldots$
From Area of Triangle in Terms of Side and Altitude, their areas are:

$\dfrac {r b_1} 2, \dfrac {r b_2} 2, \dfrac {r b_3} 2, \ldots$
The area $\AA$ of the circle is given by the sum of the areas of each of these triangles:














\(\ds \AA\)

\(=\)







\(\ds \dfrac {r b_1} 2 + \dfrac {r b_2} 2 + \dfrac {r b_3} 2 + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac r 2 \paren {b_1 + b_2 + b_3 + \cdots}\)









But $b_1 + b_2 + b_3 + \cdots$ is the length of the circumference of the circle.
From Perimeter of Circle:

$b_1 + b_2 + b_3 + \cdots = 2 \pi r$
Hence:














\(\ds \AA\)

\(=\)







\(\ds \dfrac r 2 \paren {b_1 + b_2 + b_3 + \cdots}\)




















\(\ds \)

\(=\)







\(\ds \dfrac r 2 \paren {2 \pi r}\)




















\(\ds \)

\(=\)







\(\ds \pi r^2\)









It needs to be noted that this proof is intuitive and non-rigorous.
$\blacksquare$


Proof 6
From Equation of Circle:

$x^2 + y^2 = r^2$

Let $A$ be the area of the circle whose equation is given by $x^2 + y^2 = r^2$.
We have that:

$y = \pm \sqrt {r^2 - x^2}$
For the upper half of the circle:

$y = +\sqrt {r^2 - x^2}$
Thus for the right hand half of the upper half of the circle:














\(\ds \frac A 4\)

\(=\)







\(\ds \int_0^r \sqrt {r^2 - x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi r^2} 4\)





Definite Integral from $0$ to $r$ of $\sqrt {r^2 - x^2}$



Hence the result.
$\blacksquare$


Proof 7
Theorem
The area $A$ of a circle is given by:

$A = \pi r^2$
where $r$ is the radius of the circle.


Proof
<onlyinclude>
By the method of exhaustion:





Construction

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
For step $1$ of the construction, construct a circle $C$ and a diameter of $C$, thereby dividing the circumference of $C$ into $2$ arcs. Let $A$ be the area of $C$ and $r$ be the radius of $C$.
For $n>1$, step $n$ of the construction consists of constructing a regular $2^n$-gon $P_n$ inscribed in $C$. For each arc $EB$ of $C$ which has not been subdivided, construct the midpoint $G$ of arc $EB$ and join segments $\overline{EG}$ and $\overline{GB}$.


Lemma: The area of $P_n$ converges to $A$ as $n \to \infty$
Let $E_n = A - P_n$ be the area outside of $P_n$ and inside of $C$. As this area is divided into $2^n$ disjoint, congruent sectors, let $e_n=\dfrac{E_n}{2^n}$ be the area of one such sector.
Consider a sector with endpoints $E$ and $B$, with $G$ the midpoint of the bounding arc. Construct a line $\ell$ through $G$ parallel to $\overline{EB}$. Construct perpendiculars to $\ell$ through $E$ and $B$ and let them meet $\ell$ at $H$ and $I$ respectively. Then quadrilateral $EHIB$ is a rectangle, as it has four right angles by construction. Therefore, its area is twice that of $\bigtriangleup EGB$. 
Since arc $EB$ is contained in $EHIB$, $e_n \leq [EHIB] = 2[\bigtriangleup EGB]$
$\Rightarrow \dfrac{1}{2}e_n \leq [\bigtriangleup EGB]$
$\Rightarrow e_n \leq [\bigtriangleup EGB] +\dfrac{1}{2}e_n$
$\Rightarrow e_n - [\bigtriangleup EGB] \leq \dfrac{1}{2}e_n$
$\Rightarrow 2e_{n+1} \leq \dfrac{1}{2} e_n$
$\Rightarrow e_{n+1} \leq \dfrac{1}{4} e_n$
$\Rightarrow \dfrac{E_{n+1}}{2^{n+1}} \leq \dfrac{1}{4} \cdot \dfrac{E_n}{2^n}$
$\Rightarrow E_{n+1} \leq \dfrac{1}{2} E_n$
It can be shown by induction that $E_n$ is bounded above by the geometric sequence $\big(\dfrac{1}{2}\big)^nE_1$ which converges to $0$.
Since each term of $E_n$ is an area, it is bounded below by the constant sequence $0$, which converges to $0$. By the Squeeze Theorem, $E_n$ converges to $0$. By Combination Theorem for Sequences, $P_n$ converges to $A$. 
$\Box$


Proof
Observe that $P_n$ is the union of $2^n$ congruent isosceles triangles whose bases are the edges of $P_n$, whose legs are radii of $C$, and which have a common vertex at the center of $C$.
Thus if $T$ is the area of one of these triangles, the area of $P_n$ is $2^n T$. 
For each such triangle, the angle at the vertex is $ \dfrac {2 \pi} {2^n}$.
By Area of Isosceles Triangle, the area of each triangle is $\dfrac 1 2 r^2 \map \sin {\dfrac {2 \pi} {2^n} }$.
Thus, the area of $P_n$ is $2^{n - 1} r^2 \map \sin {\dfrac {2 \pi} {2^n} }$.
By the Lemma, the area of $C$ is then:

$\ds \lim_{n \mathop \to \infty} 2^{n - 1} r^2 \map \sin {\dfrac \pi {2^{n - 1} } }$
Let $m = \dfrac \pi {2^{n-1} }$.
Because $m \to 0$ as $n \to \infty$, this leads to:














\(\ds A\)

\(=\)







\(\ds r^2 \lim_{m \mathop \to 0} \dfrac \pi m \map \sin m\)




















\(\ds \)

\(=\)







\(\ds \pi r^2 \lim_{m \mathop \to 0} \dfrac {\map \sin m} m\)




















\(\ds \)

\(=\)







\(\ds \pi r^2\)





Limit of Sine of X over X at Zero



$\blacksquare$


Historical Note
The technique of finding the Area of Circle by means of the method of exhaustion was devised by Archimedes of Syracuse.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: $\S 2.1$: Achilles and the tortoise
Examples
Radius $2$
Let $C$ be a circle whose radius is $2$.
Then the area of $C$ is $4 \pi$.


Also see
Perimeter of Circle


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 4$: Geometric Formulas: $4.11$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41972 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41971 \ldots$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): circle
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): circle
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): circle
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $1$: Areas and volumes
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): circle
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $1$: Areas and volumes




