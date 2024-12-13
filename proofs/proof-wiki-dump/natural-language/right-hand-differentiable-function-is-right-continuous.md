# 

Source: https://proofwiki.org/wiki/Right-Hand_Differentiable_Function_is_Right-Continuous

Theorem
Let $f$ be a real function defined on an interval $I$.
Let $a$ be a point in $I$ where $f$ is right-hand differentiable.

Then $f$ is right-continuous at $a$.


Proof
By hypothesis, $\map {f'_+} a$ exists.
First we note that $a$ cannot be the right hand end point of $I$ because values in $I$ greater than $a$ need to exist for $\map {f'_+} a$ to exist.

We form the following expression:

$\ds \lim_{x \mathop \to a^+} \paren {\map f x - \map f a}$
We need to show that it is defined and to find its value.

We find:














\(\ds \)

\(\)







\(\ds \lim_{x \mathop \to a^+} \paren {\map f x - \map f a}\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to a^+} \paren {\frac {\map f x - \map f a} {x - a} \paren {x - a} }\)





where the denominator is unequal to $0$ since $x > a$














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to a^+} \paren {\frac {\map f x - \map f a} {x - a} } \lim_{x \mathop \to a^+} \paren {x - a}\)





Product Rule for Limits of Real Functions since (see the next step) the two limits exist














\(\ds \)

\(=\)







\(\ds \map {f'_+} a \times 0\)





Definition of Right-Hand Derivative














\(\ds \)

\(=\)







\(\ds 0\)









Note that this proves that $\ds \lim_{x \mathop \to a^+} \paren {\map f x - \map f a}$ exists.

We continue by manipulating the result above:














\(\ds \lim_{x \mathop \to a^+} \paren {\map f x - \map f a}\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \lim_{x \mathop \to a^+} \paren {\map f x - \map f a} + \map f a - \map f a\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \lim_{x \mathop \to a^+} \paren {\map f x - \map f a} + \lim_{x \mathop \to a^+} \map f a - \map f a\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \lim_{x \mathop \to a^+} \paren {\map f x - \map f a + \map f a} - \map f a\)

\(=\)







\(\ds 0\)





Sum Rule for Limits of Real Functions since the two limits in the previous expression exist








\(\ds \leadstoandfrom \ \ \)





\(\ds \lim_{x \mathop \to a^+} \map f x - \map f a\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \lim_{x \mathop \to a^+} \map f x\)

\(=\)







\(\ds \map f a\)









which means that $f$ is right-continuous at $a$.
$\blacksquare$





