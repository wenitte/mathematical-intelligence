# 

Source: https://proofwiki.org/wiki/Decomposition_of_Mean_Squared_Error

Theorem
Let $\theta$ be a population parameter of some statistical model.
Let $\hat \theta$ be an estimator of $\theta$.
We then have:

$\map {\operatorname {MSE} } {\hat \theta} = \var {\hat \theta} + \paren {\map {\operatorname {bias}} {\hat \theta} }^2 $
where:

$\map {\operatorname {MSE} } {\hat \theta}$ denotes the Mean Squared Error of $\hat \theta$.
$\var {\hat \theta}$ denotes the variance of $\hat \theta$.
$\map {\operatorname {bias} } {\hat \theta}$ denotes the bias of $\hat \theta$.


Proof
Let $\delta = \hat \theta - \theta$.
By Definition of Mean Squared Error of Estimator:

$\expect {\delta ^2} = \map {\operatorname {MSE} } {\hat \theta}$
and:














\(\ds \expect \delta\)

\(=\)







\(\ds \expect {\paren {\hat \theta} - \theta}\)




















\(\ds \)

\(=\)







\(\ds \expect {\hat \theta} - \theta\)





Expectation of Linear Transformation of Random Variable














\(\ds \)

\(=\)







\(\ds \map{\operatorname{bias} } {\hat \theta}\)





Definition of Bias in Estimator



Therefore:














\(\ds \var {\hat \theta}\)

\(=\)







\(\ds \var \delta\)





Variance of Linear Transformation of Random Variable














\(\ds \)

\(=\)







\(\ds \expect {\delta^2} - \paren {\expect \delta}^2\)





Variance as Expectation of Square minus Square of Expectation














\(\ds \)

\(=\)







\(\ds \map {\operatorname {MSE} } {\hat \theta} - \paren {\map {\operatorname {bias} } {\hat \theta} }^2\)









Or, equivalently:

$\map {\operatorname {MSE} } {\hat \theta} = \var {\hat \theta} + \paren {\map {\operatorname {bias} } {\hat \theta} }^2$
$\blacksquare$





