angular.module('app.blog', ['ngSanitize', 'btford.markdown'])
    .controller('BlogController', ['$http', '$timeout', BlogController])
    .directive('blogPost', function () {
        return {
            replace: true,
            scope: {
                post: '='
            },
            template: '\
            <article class="post post-item col-lg-4 col-sm-6 col-xs-12">\
                <div class="post-content animated fadeInUp visible">\
                    <div class="meta">\
                        <span><i class="fa fa-user"></i>Sebastian Hof</span>\
                        <span ng-repeat="tag in post.tags"><i class="fa fa-tag"></i>{{::tag}}</span>\
                    </div>\
                    <div class="date">{{::post.date | date}}</div>\
                    <h1><a href="#">{{::post.title}}</a></h1>\
                    <p class="lead">{{::post.excerpt}}</p>\
                    <a class="btn btn-primary btn-xs" ng-click="$parent.blog.readMore(post)"><span>{{ \'BLOG.READ_MORE\' | translate }}</span><i class="ti-arrow-right"></i></a>\
                </div>\
            </article>'
        }
    });


function BlogController($http, $timeout) {
    var _this = this;

    $http.get('/api/blog').success(function (data) {
        _this.posts = data.posts;
    });

    this.currentPost = null;

    this.showPosts = function() {
        _this.currentPost = null;
    };

    this.readMore = function(post) {
      _this.currentPost = post;
    };

}