# 

Source: https://proofwiki.org/wiki/Cauchy_Mean_Value_Theorem

  This article was Featured Proof between 17 July 2009 and 31 July 2009.


Theorem
Let $f$ and $g$ be real functions which are continuous on the closed interval $\closedint a b$ and differentiable on the open interval $\openint a b$.
Suppose:

$\forall x \in \openint a b: \map {g'} x \ne 0$

Then:

$\exists \xi \in \openint a b: \dfrac {\map {f'} \xi} {\map {g'} \xi} = \dfrac {\map f b - \map f a} {\map g b - \map g a}$


Proof
First we check $\map g a \ne \map g b$.
Aiming for a contradiction, suppose $\map g a = \map g b$.
From Rolle's Theorem:

$\exists \xi \in \openint a b: \map {g'} \xi = 0$.
This contradicts $\forall x \in \openint a b: \map {g'} x \ne 0$.
Thus by Proof by Contradiction $\map g a \ne \map g b$.

Let $h = \dfrac {\map f b - \map f a} {\map g b - \map g a}$.
Let $F$ be the real function defined on $\closedint a b$ by:

$\map F x = \map f x - h \map g x$.

Then:














\(\ds \map F b - \map F a\)

\(=\)







\(\ds \paren {\map f b - h \map g b} - \paren {\map f a - h \map g a}\)





as $\map F x = \map f x - h \map g x$














\(\ds \)

\(=\)







\(\ds \paren {\map f b - \map f a} - h \paren {\map g b - \map g a}\)




















\(\ds \)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map F a\)

\(=\)







\(\ds \map F b\)














\(\ds \leadsto \ \ \)

\(\ds \exists \xi \in \openint a b: \, \)



\(\ds \map {F'} \xi\)

\(=\)







\(\ds \map {f'} \xi - h \map {g'} \xi\)





Sum Rule for Derivatives, Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds 0\)





Rolle's Theorem








\(\ds \leadsto \ \ \)

\(\ds \exists \xi \in \openint a b: \, \)



\(\ds \frac {\map {f'} \xi} {\map {g'} \xi}\)

\(=\)







\(\ds h\)





$\forall x \in \openint a b: \map {g'} x \ne 0$














\(\ds \)

\(=\)







\(\ds \frac {\map f b - \map f a} {\map g b - \map g a}\)









$\blacksquare$


Also presented as
The Cauchy Mean Value Theorem can also be found presented as:

$\exists \xi \in \openint a b: \map {f'} \xi \paren {\map g b - \map g a} = \map {g'} \xi \paren {\map f b - \map f a}$


Geometrical Interpretation
Consider two functions $\map f x$ and $\map g x$:

continuous on the closed interval $\closedint a b$
differentiable on $\openint a b$.
For every $x \in \closedint a b$, we consider the point $\tuple {\map f x, \map g x}$.
If we trace out the points $\tuple {\map f x, \map g x}$ over every $x \in \closedint a b$, we get a curve in two dimensions, as shown in the graph:






This article, or a section of it, needs explaining.In particular: An explanation is needed as to the coordinate frame used to depict this.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
In the drawing, the slope of the red line is $\dfrac {\map g b - \map g a} {\map f b - \map f a}$.
This is because:

$\dfrac {\Delta y} {\Delta x} = \dfrac {\map g b - \map g a} {\map f b - \map f a}$
assuming that the vertical axis, which contains the value of $\map f x$, is the $y$-axis.

The slope of the green line is $\dfrac {\map {g'} c} {\map {f'} c}$.
This is because:

$\valueat {\dfrac {\d g} {\d f} } {x \mathop = c} = \valueat {\dfrac {\d g / \d x} {\d f / \d x} } {x \mathop = c} = \dfrac {\map {g'} c} {\map {f'} c}$
The graph illustrates that for the value of $c$ chosen in the graph, the slopes of the red line and green line are the same.
That is:

$\dfrac {\map g b - \map g a} {\map f b - \map f a} = \dfrac {\map {g'} c} {\map {f'} c}$


Also known as
The Cauchy Mean Value Theorem is also known as the generalized mean value theorem.
Some sources include a possessive apostrophe: Cauchy's Mean Value Theorem


Example
In the 2012 Olympics Usain Bolt won the 100 metres gold medal with a time of $9.63$ seconds.
By definition, his average speed was the total distance travelled divided by the total time it took:














\(\ds V_a\)

\(=\)







\(\ds \frac {\map d {t_2} - \map d {t_1} } {t_2 - t_1}\)




















\(\ds \)

\(=\)







\(\ds \frac {100 \ \mathrm m} {9.63 \ \mathrm s}\)




















\(\ds \)

\(=\)







\(\ds 10.384 \ \mathrm {m/s}\)




















\(\ds \)

\(=\)







\(\ds 37.38 \ \mathrm {km/h}\)










The Mean Value Theorem gives:

$\map {f'} c = \dfrac {\map f b - \map f a} {b - a}$
Hence, at some point Bolt was actually running at the average speed of $37.38 \ \mathrm {km/h}$
Asafa Powell was participating in that same race.
He achieved a time of $11.99 \ \mathrm s = 1.245 \times 9.63 \ \mathrm s$.
So Bolt's average speed was $1.245$ times the average speed of Powell.

The Cauchy Mean Value Theorem gives:














\(\ds \frac {\map {f'} c} {\map {g'} c}\)

\(=\)







\(\ds \frac {\map f b - \map f a} {\map g b - \map g a}\)




















\(\ds \)

\(=\)







\(\ds \frac {\dfrac {\map f b - \map f a} {b - a} } {\dfrac {\map g b - \map g a} {b - a} }\)









Hence, at some point, Bolt was actually running at a speed exactly $1.245$ times that of Powell's.


Also see
Mean Value Theorem


Source of Name
This entry was named for Augustin Louis Cauchy.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next)




