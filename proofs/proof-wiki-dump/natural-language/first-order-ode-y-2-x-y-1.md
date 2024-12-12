# 

Source: https://proofwiki.org/wiki/First_Order_ODE/y%27_%2B_2_x_y_%3D_1

Theorem
The first order ODE:

$y' + 2 x y = 1$
has the general solution:

$y = e^{-{x^2} } \ds \int_a^x e^{t^2} \rd t$
where $a$ is an arbitrary constant.


Proof
This is a linear first order ODE in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map p x = 2 x$
$\map Q x = 1$
From Solution to Linear First Order Ordinary Differential Equation:

$\ds y = e^{-\int P \rd x} \paren {\int Q e^{\int P \rd x} \rd x + C}$
Thus 














\(\ds y\)

\(=\)







\(\ds e^{-\int 2 x \rd x} \int e^{\int 2 x \rd x} \rd x + C\)




















\(\ds \)

\(=\)







\(\ds e^{- {x^2} } \int e^{x^2} \rd x + C\)





Primitive of Power




This needs considerable tedious hard slog to complete it.In particular: Get this into the form as given -- the technique will be provided later in the book, one expectsTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Further work on this is not trivial, as $\ds \int e^{x^2} \rd x$ has no solution in elementary functions.
$\blacksquare$


Sources
1962: J.C. Burkill: The Theory of Ordinary Differential Equations (2nd ed.) ... (previous) ... (next): Chapter $\text I$: Existence of Solutions: $2$. Simple ideas about solutions: Example $1$.




