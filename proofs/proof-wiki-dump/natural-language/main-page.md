# 

Source: https://proofwiki.org/wiki/Main_Page


Welcome to $\mathsf{Pr} \infty \mathsf{fWiki}$





$\mathsf{Pr} \infty \mathsf{fWiki}$ is an online compendium of mathematical proofs! Our goal is the collection, collaboration and classification of mathematical proofs. If you are interested in helping create an online resource for math proofs feel free to register for an account. Thanks and enjoy!
If you have any questions, comments, or suggestions please post on the discussion page, or contact one of the administrators. Also, feel free to take a look at the frequently asked questions because you may not be the first with your idea.
To see what's currently happening in the community, visit the  community portal.


27,804 Proofs — 30,829 Definitions — Help
Follow @ProofWiki!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");


Featured Proof


Infinite Product of One Plus Reciprocals of Squares




Theorem













\(\ds \prod_{n \mathop = 1}^\infty \paren {1 + \frac 1 {n^2} }\)

\(=\)







\(\ds \paren {1 + \frac 1 1} \times \paren {1 + \frac 1 4} \times \paren {1 + \frac 1 9} \times \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac {\sinh \pi} \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {e^\pi - e^{-\pi} } {2 \pi}\)











Proof













\(\ds \prod_{n \mathop = 1}^\infty \paren {1 + \frac 1 {n^2 } }\)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {n^2 + 1} {n^2}\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \frac {\paren {n - i} \paren {n + i} } {\paren {n - 0} \paren {n - 0} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 1 \map \Gamma 1} {\map \Gamma {1 + i} \map \Gamma {1 - i} }\)





Infinite Product of Product of Sequence of $n + \alpha$ over Sequence of $n + \beta$














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 1 \map \Gamma 1} {i \map \Gamma i \map \Gamma {1 - i} }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {0! \times 0! \map \sin {i \pi} } {i \pi}\)





Gamma Function Extends Factorial, Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \frac {i \map \sinh {\pi} } {i \pi}\)





Hyperbolic Sine in terms of Sine, Factorial of Zero














\(\ds \)

\(=\)







\(\ds \frac {\map \sinh {\pi} } \pi\)




















\(\ds \)

\(=\)







\(\ds \frac {e^\pi - e^{-\pi} } {2 \pi}\)





Definition of Hyperbolic Sine



$\blacksquare$
  





