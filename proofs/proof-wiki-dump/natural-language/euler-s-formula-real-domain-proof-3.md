# 

Source: https://proofwiki.org/wiki/Euler%27s_Formula/Real_Domain/Proof_3


This page has been identified as a candidate for refactoring of medium complexity.In particular: Too much here -- the establishment of the properties of logs needs to be presented elsewhere as it has wider applications.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be tidied.In particular: I also have problems with the ad-hoc method of using a boldface version of log to denote the complex logarithm function as it is only going to be denoted as $\log$ in any case. Work has been started on preliminary tidying but there's a lot to do.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $\theta \in \R$ be a real number.
Then:

$e^{i \theta} = \cos \theta + i \sin \theta$


Proof
It follows from Argument of Product equals Sum of Arguments that the $\map \arg z$ function for all $z \in \C$ satisfies the relationship:

$\map \arg {z_1 z_2} = \map \arg {z_1} + \map \arg {z_2}$
which means that $\map \arg z$ is a kind of logarithm, in the sense that it satisfies the fundamental property of logarithms:

$\log x y = \log x + \log y$
Notice that $\map \arg z$ can not be considered a generalization to complex values of the ordinary $\log$ function for real values, since for $x \in \R$, we have:

$0 = \map \arg x \ne \log x$
If we do wish to generalize the $\log$ function to complex values, we can use $\arg z$ to define a set of functions:

$\map {\operatorname{alog} } z = a \map \arg z + \log \cmod z$
for any $a \in \C$, where $\cmod z$ is the modulus of $z$.
All functions satisfy the fundamental property of logarithms and also coincide with the $\log$ function for all real values.
This is established in the following lemma.


Lemma 1
For all $a,z \in \C$, define the (complex valued) function $\operatorname{alog}$ as:

$\map {\operatorname{alog} } z = a \map \arg z + \log \cmod z$
then, for any $z_1, z_2 \in \C$ and $x \in \R$:

$\map {\operatorname{alog} } {z_1 z_2} = \map {\operatorname{alog} } {z_1} + \map {\operatorname{alog} } {z_2}$
and:

$\map {\operatorname{alog} } x = \log x$
This means that our (complex valued) $\operatorname{alog}$ functions can genuinely be considered generalizations of the (real valued) $\log$ function.


Proof of Lemma 1
Let $z_1, z_2$ be any two complex numbers, straightforward substitution on the definition of $\operatorname{alog}$ yields:














\(\ds \map {\operatorname{alog} } {z_1 z_2}\)

\(=\)







\(\ds a \map \arg {z_1 z_2} + \log \cmod {z_1 z_2}\)




















\(\ds \)

\(=\)







\(\ds a \paren {\map \arg {z_1} + \map \arg {z_1} } + \map \log {\cmod {z_1} \cmod {z_2} }\)




















\(\ds \)

\(=\)







\(\ds a \paren {\map \arg {z_1} + \map \arg {z_1} } + \log \cmod {z_1} + \log \cmod {z_2}\)




















\(\ds \)

\(=\)







\(\ds a \map \arg {z_1} + \log \cmod {z_1} + a \map \arg {z_2} + \log \cmod {z_2}\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname{alog} } {z_1} + \map {\operatorname{alog} } {z_1}\)










Second part of our lemma is even more straightforward since for $x \in \R$, we have:

$\map \arg x = 0$
Then:














\(\ds \map {\operatorname{alog} } x\)

\(=\)







\(\ds a \map \arg x + \log \cmod x\)




















\(\ds \)

\(=\)







\(\ds \log x\)









which concludes the proof of Lemma 1.
$\Box$

We're left  with an infinitude of possible generalizations of the $\log$ function, namely one for each choice of $a$ in our definition of $\operatorname{alog}$.
The following lemma proves that there's a value for $a$ that guarantees our definition of $\operatorname{alog}$ satisfies the much desirable property of $\log$:

$\dfrac{\d \log x} {\d x} = \dfrac 1 x$


Lemma 2
Let $\map {\operatorname{alog} } z = a \map \arg z + \log \cmod z$.
Then if:

$\dfrac {\map \d {\operatorname{alog} z} } {\d z} = \dfrac 1 z$
we must have:

$a = i$


Proof of Lemma 2
Let $z \in \C$ be such that:

$\cmod z = 1$
and:

$\map \arg z = \theta$

Then:

$z = \cos \theta + i \sin \theta$
Plugging those values in our definition of $\operatorname{alog}$:














\(\ds \map {\operatorname{alog} } z\)

\(=\)







\(\ds a \map \arg {\cos \theta + i \sin \theta} + \log \cmod z\)




















\(\ds \)

\(=\)







\(\ds a \theta + \log 1 = a \theta\)









We now have:

$a \theta = \map {\operatorname{alog} } {\cos \theta + i \sin \theta}$
Taking the derivative with respect to $\theta$ on both sides, we have:














\(\ds \map {\frac \d {\d \theta} } {a \theta}\)

\(=\)







\(\ds \map {\frac \d {\d \theta} } {\map {\operatorname{alog} } {\cos \theta + i \sin \theta} }\)




















\(\ds a\)

\(=\)







\(\ds \dfrac {\map \d {\cos \theta + i \sin \theta} } {\d \theta} \dfrac {\map \d {\map {\operatorname{alog} } {\cos \theta + i \sin \theta} } } {\map \d {\cos \theta + i \sin \theta} }\)





Chain Rule for Derivatives














\(\ds a\)

\(=\)







\(\ds \paren {-\sin \theta + i \cos \theta} \frac 1 {\cos \theta + i \sin \theta}\)





by hypothesis: $\dfrac {\map \d {\operatorname{alog} z} } {\d z} = \dfrac 1 z$



This last equation is true regardless of the value of $\theta$.
In particular, for $\theta = 0$, we must have:

$a = i$
which proves the lemma.
$\Box$

We now have established there is one function which truly deserves to be called the logarithm of complex numbers, defined as:

$\log z = i \map \arg z + \log \cmod z$
Since for any $z, z_1, z_2 \in \C, x \in \R$ it satisfies:

$\map \log {z_1 z_2} = \log z_1 + \log z_2$
$\log x = \log x$
$\dfrac {\map \d {\log z} } {\d z} = \dfrac 1 z$
Let its inverse function be referred to as the exponential of complex numbers, denoted as $e^z$.
If we write $z$ in its polar form:

$z = \cmod z \paren {\cos \theta + i \sin \theta}$
we have that:

$e^{i \theta + \log \cmod z} = \cmod z \paren {\cos \theta + i \sin \theta}$
Consider this equation for any number $z$ such that $\cmod z = 1$.
Then:

$e^{i \theta} = \cos \theta + i \sin \theta$
$\blacksquare$





