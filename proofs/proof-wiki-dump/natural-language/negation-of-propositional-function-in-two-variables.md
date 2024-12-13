# 

Source: https://proofwiki.org/wiki/Negation_of_Propositional_Function_in_Two_Variables

Theorem
Let $\map P {x, y}$ be a propositional function of two Variables.
Then:

$\neg \forall x: \exists y: \map P {x, y} \iff \exists x: \forall y: \neg \map P {x, y}$

That is:

It is not the case that for all $x$ a value of $y$ can be found to satisfy $\map P {x, y}$
means the same thing as:

There exists at least one value of $x$ such that for all $y$ it is not possible to satisfy $\map P {x, y}$


Proof









\(\ds \neg \forall x: \, \)



\(\ds \exists y\)

\(:\)







\(\ds \map P {x, y}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists x: \, \)



\(\ds \neg \exists y\)

\(:\)







\(\ds \map P {x, y}\)





Denial of Universality








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists x: \, \)



\(\ds \forall y\)

\(:\)







\(\ds \neg \map P {x, y}\)





Denial of Existence



$\blacksquare$


Sources
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 1$: Some mathematical language: Variables and quantifiers




