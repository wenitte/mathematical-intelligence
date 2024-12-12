# 

Source: https://proofwiki.org/wiki/Expression_for_bilinear_function


It has been suggested that this page be renamed.In particular: Capitalisation and precisionTo discuss this page in more detail, feel free to use the talk page.


Theorem
Let $f$ be a real function of two independent variables, $f \in \R \times \R \to \R$.

Then:

$\map f {x, y}$ is a linear function of $x$ when $y$ is equal to a real constant
$\map f {x, y}$ is a linear function of $y$ when $x$ is equal to a real constant
if and only if $f$ has the form:

$\exists a, b, c, d \in \R: \forall {x, y} \in \R: \map f {x, y} = a x y + b x + c y + d$


Proof
Sufficient Condition
Let:

$\map f {x, y}$ be a linear function of $x$ when $y$ is equal to a real constant
$\map f {x, y}$ be a linear function of $y$ when $x$ is equal to a real constant
We need to show that:

$\exists a, b, c, d \in \R: \forall {x, y} \in \R: \map f {x, y} = a x y + b x + c y + d$


Expressions for $\map f {x, y}$ when either $x$ or $y$ is constant
We have:

$\map f {x, y}$ is a linear function of $x$ when $y$ is equal to a real constant.
This means that:

$\exists \alpha, \beta, y \in \R: \forall x \in \R: \map f {x, y} = \alpha x + \beta$

The real constants $\alpha$ and $\beta$ may depend on $y$ as $y$ is constant.
In other words:

$\forall {x, y} \in \R: \map f {x, y} = \map {a_1} y x + \map {a_2} y$
where $a_1$ and $a_2$ are real functions, $a_1, a_2 \in \R \to \R$.

By symmetry, we find from:

$\map f {x, y}$ is a linear function of $y$ when $x$ is equal to a real constant
that:

$\forall {x, y} \in \R: \map f {x, y} = \map {b_1} x y + \map {b_2} x$
where $b_1$ and $b_2$ are real functions, $b_1, b2 \in \R \to \R$.
$\Box$


Expression for $\map f {x, y}$ for every value of $x$ and $y$
We have:














\(\ds \forall {x, y} \in \R: \map f {x, y}\)

\(=\)







\(\ds \map {a_1} y x + \map {a_2} y\)


















\(\, \ds \land \, \)

\(\ds \forall {x, y} \in \R: \map f {x, y}\)

\(=\)







\(\ds \map {b_1} x y + \map {b_2} x\)














\(\ds \leadsto \ \ \)





\(\ds \forall {x, y} \in \R: \map {a_1} y x + \map {a_2} y\)

\(=\)







\(\ds \map {b_1} x y + \map {b_2} x\)














\(\ds \leadsto \ \ \)





\(\ds \forall x \in \R: \map {a_1} 0 x + \map {a_2} 0\)

\(=\)







\(\ds \map {b_2} x\)





$y = 0$








\(\ds \leadsto \ \ \)





\(\ds \forall x \in \R: \map {b_2} x\)

\(=\)







\(\ds \map {a_1} 0 x + \map {a_2} 0\)









In other words, $b_2$ is a linear function of $x$.
We have:














\(\ds \forall {x, y} \in \R: \map {a_1} y x + \map {a_2} y\)

\(=\)







\(\ds \map {b_1} x y + \map {b_2} x\)














\(\ds \leadsto \ \ \)





\(\ds \forall {x, y} \in \R: \map {a_1} y x + \map {a_2} y\)

\(=\)







\(\ds \map {b_1} x y + \map {a_1} 0 x + \map {a_2} 0\)





$\map {b_2} x = \map {a_1} 0 x + \map {a_2} 0$








\(\ds \leadsto \ \ \)





\(\ds \forall x \in \R: \map {a_1} 1 x + \map {a_2} 1\)

\(=\)







\(\ds \map {b_1} x + \map {a_1} 0 x + \map {a_2} 0\)





$y = 1$








\(\ds \leadsto \ \ \)





\(\ds \forall x \in \R: \map {b_1} x\)

\(=\)







\(\ds \map {a_1} 1 x + \map {a_2} 1 - \paren {\map {a_1} 0 x + \map {a_2} 0}\)














\(\ds \leadsto \ \ \)





\(\ds \forall x \in \R: \map {b_1} x\)

\(=\)







\(\ds \paren {\map {a_1} 1 - \map {a_1} 0} x  + \map {a_2} 1 - \map {a_2} 0\)









In other words, $b_1$ is a linear function of $x$.

In conclusion, we have:














\(\ds \forall {x, y} \in \R: \map f {x, y}\)

\(=\)







\(\ds \map {b_1} x y + \map {b_2} x\)














\(\ds \leadsto \ \ \)





\(\ds \forall {x, y} \in \R: \map f {x, y}\)

\(=\)







\(\ds \map {b_1} x y + \map {a_1} 0 x + \map {a_2} 0\)





$\map {b_2} x = \map {a_1} 0 x + \map {a_2} 0$








\(\ds \leadsto \ \ \)





\(\ds \forall {x, y} \in \R: \map f {x, y}\)

\(=\)







\(\ds \paren {\paren {\map {a_1} 1 - \map {a_1} 0} x  + \map {a_2} 1 - \map {a_2} 0} y + \map {a_1} 0 x + \map {a_2} 0\)





$\map {b_1} x = \paren {\map {a_1} 1 - \map {a_1} 0} x  + \map {a_2} 1 - \map {a_2} 0$








\(\ds \leadsto \ \ \)





\(\ds \forall {x, y} \in \R: \map f {x, y}\)

\(=\)







\(\ds \paren {\map {a_1} 1 - \map {a_1} 0} x y + \paren {\map {a_2} 1 - \map {a_2} 0} y + \map {a_1} 0 x + \map {a_2} 0\)














\(\ds \leadsto \ \ \)





\(\ds \forall {x, y} \in \R: \map f {x, y}\)

\(=\)







\(\ds \paren {\map {a_1} 1 - \map {a_1} 0} x y + \map {a_1} 0 x + \paren { \map {a_2} 1 - \map {a_2} 0} y + \map {a_2} 0\)










This expression for $\map f {x, y}$ is of the sought for form:

$\exists {a, b, c, d} \in \R: \forall {x, y} \in \R: \map f {x, y} = a x y + b x + c y + d$
$\Box$


Necessary Condition
Let:

$\exists {a, b, c, d} \in \R: \forall {x, y} \in \R: \map f {x, y} = a x y + b x + c y + d$
We need to show that:

$\map f {x, y}$ is a linear function of $x$ when $y$ is equal to a real constant
$\map f {x, y}$ is a linear function of $y$ when $x$ is equal to a real constant

Let:

$y$ be equal to a real constant.
We have:














\(\ds \exists {a, b, c, d} \in \R: \forall {x, y} \in \R: \map f {x, y}\)

\(=\)







\(\ds a x y + b x + c y + d\)


















\(\, \ds \land \, \)

\(\ds y\)

\(=\)







\(\ds \text {a real constant}\)














\(\ds \leadsto \ \ \)





\(\ds \exists {a, b, c, d, y} \in \R: \forall x \in \R: \map f {x, y}\)

\(=\)







\(\ds a x y + b x + c y + d\)














\(\ds \leadsto \ \ \)





\(\ds \exists {a, b, c, d, y} \in \R: \forall x \in \R: \map f {x, y}\)

\(=\)







\(\ds \paren {a y + b} x + c y + d\)









So, $\map f {x, y}$ is a linear function of $x$ as $a y + b$ and $c y + d$ are constant.

Now, let:

$x$ be equal to a real constant.
We have:














\(\ds \exists a, b, c, d \in \R: \forall {x, y} \in \R: \map f {x, y}\)

\(=\)







\(\ds a x y + b x + c y + d\)


















\(\, \ds \land \, \)

\(\ds x\)

\(=\)







\(\ds \text {a real constant}\)














\(\ds \leadsto \ \ \)





\(\ds \exists {a, b, c, d, x} \in \R: \forall y \in \R: \map f {x, y}\)

\(=\)







\(\ds a x y + b x + c y + d\)














\(\ds \leadsto \ \ \)





\(\ds \exists {a, b, c, d, x} \in \R: \forall y \in \R: \map f {x, y}\)

\(=\)







\(\ds \paren {a x + c} y + b x + d\)









So, $\map f {x, y}$ is a linear function of $y$ as $a x + c$ and $b x + d$ are constant.
Hence the result.
$\blacksquare$





