# 

Source: https://proofwiki.org/wiki/Area_of_Circle/Proof_7



Theorem
The area $A$ of a circle is given by:

$A = \pi r^2$
where $r$ is the radius of the circle.


Proof
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




