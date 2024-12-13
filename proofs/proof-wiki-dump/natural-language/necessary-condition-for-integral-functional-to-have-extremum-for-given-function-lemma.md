# 

Source: https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_function/Lemma

Theorem
Let $\map \alpha x, \map \beta x$ be real functions.
Let $\map \alpha x, \map \beta x$ be continuous on $\closedint a b$.
Let:

$\forall \map h x \in C^1: \ds \int_a^b \paren {\map \alpha x \map h x + \map \beta x \map {h'} x} \rd x = 0$
subject to the boundary conditions:

$\map h a = \map h b = 0$

Then $\map \beta x$ is differentiable.
Furthermore:

$\forall x \in \closedint a b: \map {\beta'} x = \map \alpha x$


Proof
Using Integration by Parts allows us to factor out $\map h x$:














\(\ds \int_a^b \paren {\map \alpha x \map h x + \map \beta x \map {h'} x} \rd x\)

\(=\)







\(\ds \int_a^b \map \alpha x \map h x \rd x + \int_a^b \map \beta x \rd \map h x\)





where $\d \map h x = \map {h'} x \rd x$














\(\ds \)

\(=\)







\(\ds \int_a^b \map \alpha x \map h x \rd x + \bigintlimits {\map \beta x \map h x} a b - \int_a^b \map h x \rd \map \beta x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\map \alpha x - \map {\beta'} x} \map h x \rd x\)





as $\map h a = 0$, $\map h b = 0$



Hence the problem has been reduced to:

$\ds \int_a^b \paren {\map \alpha x - \map {\beta'} x} \map h x \rd x = 0$
Since If Definite Integral of $\map a x \map h x$ vanishes for any $C^0 \map h x$ then $C^0 \map a x$ vanishes, the conclusion is that in the considered interval $\closedint a b$ it holds that:

$\map \alpha x = \map {\beta'} x$
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.3$: The Variation of a Functional. A Necessary Condition for an Extremum




